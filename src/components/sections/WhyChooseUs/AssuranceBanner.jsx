import {
  FaShieldAlt,
  FaUsers,
  FaStar,
  FaHeadset,
} from "react-icons/fa";

const AssuranceBanner = () => {
  return (
    <div className="mt-24">
      <div
        className="
          max-w-6xl mx-auto
          rounded-3xl
          bg-white
          border border-gray-100
          shadow-[0_20px_50px_rgba(0,0,0,0.08)]
          px-8 py-10
        "
      >
        {/* Top message */}
        <div className="text-center max-w-3xl mx-auto">
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-900">
            Travel with Confidence
          </h3>

          <p className="mt-4 text-gray-600 leading-relaxed">
            AzureEscape is trusted by travelers across India and beyond
            for secure bookings, transparent pricing, and dependable
            customer support at every step of the journey.
          </p>
        </div>

        {/* Divider */}
        <div className="my-10 h-px w-full bg-gray-100" />

        {/* Trust points */}
        <div className="grid gap-8 md:grid-cols-4 text-center">
          {/* Item */}
          <div>
            <div className="flex justify-center mb-3 text-indigo-600">
              <FaUsers size={26} />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              50,000+
            </p>
            <p className="text-sm text-gray-600">
              Happy Travelers
            </p>
          </div>

          {/* Item */}
          <div>
            <div className="flex justify-center mb-3 text-indigo-600">
              <FaStar size={26} />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              4.8 / 5
            </p>
            <p className="text-sm text-gray-600">
              Average User Rating
            </p>
          </div>

          {/* Item */}
          <div>
            <div className="flex justify-center mb-3 text-indigo-600">
              <FaShieldAlt size={26} />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              100%
            </p>
            <p className="text-sm text-gray-600">
              Secure Payments
            </p>
          </div>

          {/* Item */}
          <div>
            <div className="flex justify-center mb-3 text-indigo-600">
              <FaHeadset size={26} />
            </div>
            <p className="text-lg font-semibold text-gray-900">
              24/7
            </p>
            <p className="text-sm text-gray-600">
              Customer Support
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssuranceBanner;
