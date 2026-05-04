import { useState } from "react";
import { Link } from "react-router";
import { Trash2, ShoppingBag } from "lucide-react";
import { courses } from "../data/mockData";

export function CartPage() {
  const [cartItems, setCartItems] = useState([courses[1], courses[4]]);

  const subtotal = cartItems.reduce((acc, course) => acc + course.price, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  const removeFromCart = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  if (cartItems.length === 0) {
    return (
      <div className="py-20">
        <div className="max-w-[1400px] mx-auto px-6 text-center">
          <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
          <h2 className="mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Browse our courses and start learning today!
          </p>
          <Link
            to="/courses"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
          >
            Browse Courses
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="py-12">
      <div className="max-w-[1400px] mx-auto px-6">
        <h1 className="mb-8">Shopping Cart</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {cartItems.map((course) => (
                <div
                  key={course.id}
                  className="border border-border rounded-lg p-6 flex gap-6"
                >
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-32 h-20 object-cover rounded"
                  />
                  <div className="flex-1">
                    <h3 className="mb-1">{course.title}</h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      By {course.instructor}
                    </p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>{course.duration}</span>
                      <span>•</span>
                      <span>{course.level}</span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end justify-between">
                    <div className="text-xl font-semibold">${course.price}</div>
                    <button
                      onClick={() => removeFromCart(course.id)}
                      className="text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1 text-sm"
                    >
                      <Trash2 className="w-4 h-4" />
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="border border-border rounded-lg p-6 sticky top-20">
              <h3 className="mb-6">Order Summary</h3>

              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Tax (10%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-border pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg hover:bg-primary/90 transition-colors mb-3">
                Checkout
              </button>

              <Link
                to="/courses"
                className="block text-center text-primary hover:underline text-sm"
              >
                Continue shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
