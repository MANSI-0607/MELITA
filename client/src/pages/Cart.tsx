import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const CartDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Melita Renewing Gel Cleanser",
      price: 335,
      originalPrice: 975,
      quantity: 1,
      image:
        "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop",
    },
    {
      id: 2,
      name: "Melita Balancing Moisturizer",
      price: 1099,
      originalPrice: 1299,
      quantity: 2,
      image:
        "https://images.unsplash.com/photo-1556228578-dd1d6e0e45e3?w=200&h=200&fit=crop",
    },
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <>
      {/* Cart button (you can place this in Header) */}
      <Button variant="melita" onClick={() => setIsOpen(true)}>
        Open Cart
      </Button>

      {/* AnimatePresence handles enter/exit */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed right-0 top-0 h-full w-full sm:w-[400px] bg-white shadow-xl z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <h2 className="font-playfair text-xl font-bold text-melita-deep-coffee">
                  Shopping Cart
                </h2>
                <button onClick={() => setIsOpen(false)}>
                  <X className="h-6 w-6 text-melita-medium" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4">
                {cartItems.length === 0 ? (
                  <p className="text-center text-melita-medium font-roboto">
                    Your cart is empty
                  </p>
                ) : (
                  cartItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-start gap-4 border-b pb-4"
                    >
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-roboto font-semibold text-melita-deep-coffee">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="font-roboto font-bold">
                            ₹{item.price}
                          </span>
                          <span className="font-roboto text-xs text-melita-medium line-through">
                            ₹{item.originalPrice}
                          </span>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-3 mt-2">
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="h-7 w-7"
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="min-w-[2rem] text-center font-semibold">
                            {item.quantity}
                          </span>
                          <Button
                            variant="outline"
                            size="icon"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="h-7 w-7"
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Footer / Summary */}
              {cartItems.length > 0 && (
                <div className="p-4 border-t space-y-4">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span>₹{shipping}</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span>₹{total}</span>
                  </div>

                  <Button variant="melita" className="w-full">
                    Proceed to Checkout
                  </Button>
                  <Button
                    variant="melita-outline"
                    className="w-full"
                    onClick={() => setIsOpen(false)}
                  >
                    Continue Shopping
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default CartDrawer;
