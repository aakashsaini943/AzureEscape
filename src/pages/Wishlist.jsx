import React, { useState } from "react";
import { FaHeart, FaTrash, FaMapMarkerAlt } from "react-icons/fa";

const demoWishlist = [
  {
    id: 1,
    title: "Maldives Escape",
    location: "Maldives",
    price: "₹89,999",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    title: "Paris Getaway",
    location: "France",
    price: "₹1,24,000",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80",
  },
];

const Wishlist = () => {
  const [items, setItems] = useState(demoWishlist);

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">

      {/* ================= HEADER ================= */}
      <div className="max-w-6xl mx-auto px-4 pt-10 pb-6">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 flex items-center gap-3">
          <FaHeart className="text-pink-500" />
          My Wishlist
        </h1>
        <p className="text-sm text-gray-500 mt-1">
          Save your favourite trips & destinations
        </p>
      </div>

      {/* ================= CONTENT ================= */}
      <div className="max-w-6xl mx-auto px-4 pb-16">

        {items.length === 0 ? (
          /* ================= EMPTY STATE ================= */
          <div className="bg-white rounded-3xl shadow-sm border p-10 text-center">
            <FaHeart className="mx-auto text-4xl text-pink-400 mb-4" />
            <h2 className="text-lg font-bold text-gray-900">
              Your wishlist is empty
            </h2>
            <p className="text-sm text-gray-500 mt-2">
              Start exploring and save your favourite trips ❤️
            </p>

            <button className="mt-6 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-500 text-white font-semibold shadow hover:scale-105 transition">
              Explore Trips
            </button>
          </div>
        ) : (
          /* ================= WISHLIST GRID ================= */
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <div
                key={item.id}
                className="group bg-white rounded-3xl shadow-sm border overflow-hidden hover:shadow-xl transition"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  />

                  {/* Heart badge */}
                  <span className="absolute top-3 right-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-xs font-semibold text-pink-500 shadow">
                    ❤️ Saved
                  </span>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="font-bold text-gray-900">
                    {item.title}
                  </h3>

                  <p className="text-xs text-gray-500 flex items-center gap-1 mt-1">
                    <FaMapMarkerAlt className="text-sky-500" />
                    {item.location}
                  </p>

                  <div className="flex items-center justify-between mt-4">
                    <span className="font-extrabold text-sky-600">
                      {item.price}
                    </span>

                    <button
                      onClick={() => removeItem(item.id)}
                      className="text-gray-400 hover:text-red-500 transition"
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
