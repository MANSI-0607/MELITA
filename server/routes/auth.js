import express from 'express';
import crypto from 'crypto';
import dotenv from 'dotenv';
import User from '../models/User.js';
import twilio from 'twilio';

dotenv.config();
const router = express.Router();

const TOKEN_SECRET = process.env.JWT_SECRET || 'melita_dev_secret';

function createToken(payload) {
  const header = Buffer.from(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).toString('base64url');
  const body = Buffer.from(JSON.stringify(payload)).toString('base64url');
  const unsigned = `${header}.${body}`;
  const signature = crypto
    .createHmac('sha256', TOKEN_SECRET)
    .update(unsigned)
    .digest('base64url');
  return `${unsigned}.${signature}`;
}

router.post('/send-otp', async (req, res) => {
  try {
    const { phone, name } = req.body || {};
    if (!phone) return res.status(400).json({ message: 'Phone is required' });

    const otp = (Math.floor(100000 + Math.random() * 900000)).toString();
    const expires = new Date(Date.now() + 5 * 60 * 1000);

    let user = await User.findOne({ phone });
    if (!user) {
      user = await User.create({ phone, name: name || '' });
    } else if (name && !user.name) {
      user.name = name;
    }

    user.otpCode = otp;
    user.otpExpires = expires;
    await user.save();

    const hasTwilio =
      !!process.env.TWILIO_ACCOUNT_SID &&
      !!process.env.TWILIO_AUTH_TOKEN &&
      !!process.env.TWILIO_PHONE_NUMBER;

    if (hasTwilio) {
      try {
        const client = twilio(process.env.TWILIO_ACCOUNT_SID, process.env.TWILIO_AUTH_TOKEN);
        await client.messages.create({
          body: `Your Melita verification code is: ${otp}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: phone,
        });
        return res.json({ message: 'OTP sent via SMS' });
      } catch (twilioErr) {
        // eslint-disable-next-line no-console
        console.error('Twilio send error:', twilioErr);
        return res.status(500).json({ message: 'Failed to send OTP via SMS' });
      }
    } else {
      // For dev visibility, log OTP to server console
      // eslint-disable-next-line no-console
      console.log(`OTP for ${phone}: ${otp}`);
      return res.json({ message: 'OTP sent (dev mode)' });
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

router.post('/verify-otp', async (req, res) => {
  try {
    const { phone, otp, name } = req.body || {};
    if (!phone || !otp) return res.status(400).json({ message: 'Phone and OTP are required' });

    const user = await User.findOne({ phone });
    if (!user || !user.otpCode || !user.otpExpires) {
      return res.status(400).json({ message: 'OTP not found, please request again' });
    }
    if (user.otpCode !== otp) {
      return res.status(400).json({ message: 'Invalid OTP' });
    }
    if (new Date() > new Date(user.otpExpires)) {
      return res.status(400).json({ message: 'OTP expired' });
    }

    if (name && !user.name) user.name = name;

    // clear OTP after successful verification
    user.otpCode = undefined;
    user.otpExpires = undefined;
    await user.save();

    const token = createToken({ sub: user._id.toString(), phone: user.phone, iat: Math.floor(Date.now() / 1000) });

    return res.json({
      message: 'OTP verified',
      token,
      user: { id: user._id, name: user.name, phone: user.phone },
    });
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
    return res.status(500).json({ message: 'Server error' });
  }
});

export default router;
