import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

const CartDrawer: React.FC<CartDrawerProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: 'Melita Ultra Hydrating Essence',
      price: 1199,
      quantity: 1,
      image: '/path/to/essence-image.jpg', // Replace with your image path
    },
    {
      id: 2,
      name: 'Melita Renewing Gel Cleanser',
      price: 335,
      quantity: 1,
      image: '/path/to/cleanser-image.jpg', // Replace with your image path
    },
  ]);

  const updateQuantity = (id: number, newQty: number) => {
    if (newQty < 1) return;
    setCartItems(items =>
      items.map(item => (item.id === id ? { ...item, quantity: newQty } : item))
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = cartItems.length > 0 ? 99 : 0;
  const discount = subtotal > 2000 ? 200 : 0;
  const total = subtotal + shipping - discount;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black z-40"
            onClick={onClose}
          />
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed right-0 top-0 h-screen w-full md:w-1/3 bg-white shadow-xl z-50 flex flex-col"
          >
            {/* Header */}
            <div className="p-4 border-b border-gray-200 flex justify-between items-center text-[#1e4323] font-semibold">
              <h2 className="text-xl">Your Cart ({cartItems.length})</h2>
              <button onClick={onClose}>
                <X size={24} />
              </button>
            </div>
            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-24 h-24 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-[#1e4323]">
                      {item.name}
                    </h3>
                    <p className="text-[#6b3d2a] font-bold">₹{item.price}</p>
                    <div className="flex items-center space-x-2 mt-2">
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-[#6b3d2a] text-[#6b3d2a] hover:bg-[#f0e4d4]"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      >
                        <Minus size={16} />
                      </Button>
                      <span>{item.quantity}</span>
                      <Button
                        variant="outline"
                        size="icon"
                        className="h-8 w-8 border-[#6b3d2a] text-[#6b3d2a] hover:bg-[#f0e4d4]"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      >
                        <Plus size={16} />
                      </Button>
                    </div>
                  </div>
                  <button onClick={() => removeItem(item.id)}>
                    <Trash2 size={20} className="text-[#835339]" />
                  </button>
                </div>
              ))}
            </div>
            {/* Order Summary & Checkout */}
            <div className="p-4 border-t border-gray-200 mt-auto">
              <div className="flex justify-between text-[#1e4323]">
                <span>Subtotal</span>
                <span>₹{subtotal}</span>
              </div>
              {cartItems.length > 0 && (
                <>
                  <div className="flex justify-between text-[#1e4323]">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-green-600">
                      <span>Discount</span>
                      <span>-₹{discount}</span>
                    </div>
                  )}
                </>
              )}
              <div className="flex justify-between font-bold text-lg pt-2 mt-2 border-t border-gray-200">
                <span>Total</span>
                <span>₹{total}</span>
              </div>
              <Button
                className="w-full mt-4 bg-[#6b3d2a] text-white hover:bg-[#835339] transition-colors"
                onClick={onClose} // Placeholder for checkout action
              >
                Proceed to Checkout
              </Button>
              <button
                className="w-full mt-2 text-center text-[#6b3d2a] font-semibold hover:underline"
                onClick={onClose}
              >
                Continue Shopping
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;