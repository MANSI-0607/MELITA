import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { useState } from 'react';

const Cart = () => {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Melita Renewing Gel Cleanser",
      price: 335,
      originalPrice: 975,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Melita Balancing Moisturizer",
      price: 1099,
      originalPrice: 1299,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1556228578-dd1d6e0e45e3?w=200&h=200&fit=crop"
    }
  ]);

  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id: number) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="font-playfair text-3xl lg:text-4xl font-bold text-melita-deep-coffee mb-8 text-center">
            Shopping Cart
          </h1>

          {cartItems.length === 0 ? (
            <div className="text-center py-16">
              <p className="font-roboto text-melita-medium text-lg mb-8">Your cart is empty</p>
              <Button variant="melita" size="lg">
                Continue Shopping
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Cart Items */}
              <div className="lg:col-span-2 space-y-6">
                {cartItems.map((item) => (
                  <div key={item.id} className="bg-white p-6 rounded-lg shadow-soft">
                    <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                      {/* Product Image */}
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />

                      {/* Product Details */}
                      <div className="flex-1 space-y-2">
                        <h3 className="font-roboto font-semibold text-melita-deep-coffee">
                          {item.name}
                        </h3>
                        <div className="flex items-center space-x-2">
                          <span className="font-roboto font-bold text-melita-deep-coffee">
                            ₹{item.price}
                          </span>
                          <span className="font-roboto text-xs text-melita-medium line-through">
                            ₹{item.originalPrice}
                          </span>
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center space-x-3">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="h-8 w-8"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        <span className="font-roboto font-semibold text-melita-deep-coffee min-w-[2rem] text-center">
                          {item.quantity}
                        </span>
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      {/* Remove Button */}
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => removeItem(item.id)}
                        className="text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="bg-white p-6 rounded-lg shadow-soft h-fit">
                <h2 className="font-playfair text-xl font-bold text-melita-deep-coffee mb-6">
                  Order Summary
                </h2>
                
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span className="font-roboto text-melita-deep-coffee">Subtotal</span>
                    <span className="font-roboto font-semibold text-melita-deep-coffee">₹{subtotal}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-roboto text-melita-deep-coffee">Shipping</span>
                    <span className="font-roboto font-semibold text-melita-deep-coffee">₹{shipping}</span>
                  </div>
                  <div className="border-t pt-4 flex justify-between">
                    <span className="font-roboto font-bold text-melita-deep-coffee text-lg">Total</span>
                    <span className="font-roboto font-bold text-melita-deep-coffee text-lg">₹{total}</span>
                  </div>
                </div>

                <Button variant="melita" className="w-full mb-4">
                  Proceed to Checkout
                </Button>
                
                <Button variant="melita-outline" className="w-full">
                  Continue Shopping
                </Button>
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Cart;