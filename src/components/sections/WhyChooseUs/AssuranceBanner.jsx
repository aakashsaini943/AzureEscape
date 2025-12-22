const AssuranceBanner = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-purple-600 text-white rounded-3xl p-10 shadow-2xl flex flex-col md:flex-row justify-between items-center gap-6">
      <div>
        <h3 className="text-3xl font-bold mb-2">
          Safe • Secure • Trusted
        </h3>
        <p className="opacity-90">
          Verified partners, secure payments, and 100% transparent policies.
        </p>
      </div>
      <button className="btn btn-secondary btn-lg">
        Learn More 🔒
      </button>
    </div>
  );
};

export default AssuranceBanner;
