import React, { useState } from "react";
import {
  FaQuestionCircle,
  FaSearch,
  FaPlane,
  FaHotel,
  FaSuitcase,
  FaCreditCard,
  FaHeadset,
} from "react-icons/fa";

const faqs = [
  {
    q: "How can I cancel my booking?",
    a: "Go to My Trips → Select booking → Click Cancel. Refund eligibility depends on fare rules.",
  },
  {
    q: "When will I receive my refund?",
    a: "Refunds are typically processed within 5–7 business days depending on payment method.",
  },
  {
    q: "Can I change travel dates?",
    a: "Yes, date change is allowed subject to airline/operator policies and fare difference.",
  },
  {
    q: "What if my payment failed?",
    a: "If payment failed but money was deducted, it will auto-refund within a few days.",
  },
];

const categories = [
  { icon: FaPlane, title: "Flights", desc: "Cancellation • Refund • Reschedule" },
  { icon: FaHotel, title: "Hotels", desc: "Check-in • Refunds • Modifications" },
  { icon: FaSuitcase, title: "Holidays", desc: "Packages • Customisation • Help" },
  { icon: FaCreditCard, title: "Payments", desc: "Refunds • Failed Payments" },
];

const Help = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100">

      {/* ================= HERO ================= */}
      <section className="relative bg-gradient-to-r from-sky-500 to-indigo-600 text-white">
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative max-w-6xl mx-auto px-4 py-20 text-center">
          <div className="flex justify-center mb-5">
            <div className="bg-white/20 backdrop-blur-md p-4 rounded-2xl shadow-lg">
              <FaQuestionCircle className="text-3xl" />
            </div>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold">
            How can we help you?
          </h1>

          <p className="mt-4 text-sky-100 text-sm sm:text-base">
            Find answers, manage bookings, or connect with support
          </p>

          {/* Glass Search */}
          <div className="mt-8 max-w-xl mx-auto relative">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              placeholder="Search help topics..."
              className="
                w-full pl-11 pr-4 py-3.5
                rounded-2xl
                bg-white
                text-gray-900
                outline-none
                shadow-2xl
                backdrop-blur-xl
              "
            />
          </div>
        </div>

        {/* Bottom curve */}
        <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-b from-transparent to-slate-50 rounded-t-[40px]" />
      </section>

      {/* ================= CATEGORIES ================= */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-8">
          Browse by Category
        </h2>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((cat, i) => {
            const Icon = cat.icon;
            return (
              <div
                key={i}
                className="
                  group bg-white rounded-2xl p-5
                  border border-slate-200
                  shadow-sm
                  hover:shadow-xl hover:-translate-y-1
                  transition-all duration-300
                  cursor-pointer
                "
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-sky-100 text-sky-500 mb-4 group-hover:bg-sky-500 group-hover:text-white transition">
                  <Icon />
                </div>

                <h3 className="font-semibold text-black/100">
                  {cat.title}
                </h3>

                <p className="text-xs text-black/100 mt-1">
                  {cat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section className="max-w-4xl mx-auto px-4 pb-6">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="
                bg-white border border-slate-200
                rounded-2xl
                shadow-sm
                transition-all
              "
            >
              <button
                onClick={() => toggleFAQ(i)}
                className="
                  w-full flex justify-between items-center
                  p-4 sm:p-5
                  text-left font-semibold text-sm sm:text-base
                "
              >
                {faq.q}

                <span className="text-sky-500 text-lg">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  openIndex === i
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <p className="px-5 pb-5 text-sm text-gray-600 leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CONTACT SUPPORT ================= */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-indigo-600 to-sky-500 text-white p-8 sm:p-10 shadow-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">

            <div>
              <h3 className="text-xl sm:text-2xl font-bold">
                Still need help?
              </h3>
              <p className="text-sm text-indigo-100 mt-1">
                Our travel experts are here 24/7
              </p>
            </div>

            <button
              className="
                bg-white text-indigo-600
                font-semibold
                px-6 py-3
                rounded-xl
                shadow-lg
                hover:scale-105 hover:shadow-2xl
                transition-all
              "
            >
              <FaHeadset className="inline mr-2" />
              Contact Support
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Help;
