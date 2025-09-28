import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true },
    phone: { type: String, required: true, unique: true },
    otpCode: { type: String },
    otpExpires: { type: Date },
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);
export default User;
