import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const CartPage = () => {
 
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const handleClearCart = ()=>{
        dispatch(clearCart());
    }


  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <div className="flex items-center justify-between max-w-4xl mx-auto mt-6 mb-4 px-2">
    <h1 className="text-3xl font-bold text-gray-800">🛒 Your Cart</h1>
    <button onClick={()=>{handleClearCart()}} className="text-orange-500 border border-red-300 px-4 py-1 rounded-full font-semibold hover:bg-red-50 transition" >
        Clear Cart
    </button>
    </div>
      {cartItems.map((item,index) => (
        <div
          key={index}
          className="flex items-start justify-between bg-white p-6 rounded-xl shadow-md border border-gray-200 max-w-4xl mx-auto mt-8 hover:shadow-lg transition-shadow"
        >
          {/* Left: Info */}
          <div className="flex-1 pr-6 w-56">
            <div className="flex items-center gap-2 mb-1">
              {item.isVeg === 1 ? (
                <div className="w-4 h-4 border border-green-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full" />
                </div>
              ) : (
                <div className="w-4 h-4 border border-red-500 rounded-sm flex items-center justify-center">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                </div>
              )}
              {item.isBestseller === 1 && (
                <span className="text-red-500 text-sm font-semibold">
                  Bestseller
                </span>
              )}
            </div>

            <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
            <p className="text-gray-800 font-medium text-base mt-1 w-28">
              ₹{item.price / 100}
            </p>
            <p className="text-gray-600 text-sm mt-2">{item.description}</p>
          </div>

          {/* Right: Image and Add Button */}
          <div className="flex flex-col items-center min-w-[120px]">
            <img
              src={item.image}
              alt={item.title}
              className="w-24 h-24 rounded-lg object-cover mb-2"
            />
            
          </div>
        </div>
      ))}
    </div>
  );
};


export default CartPage;