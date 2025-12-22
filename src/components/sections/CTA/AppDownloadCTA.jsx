const AppDownloadCTA = () => {
  return (
    <div className="bg-linear-to-r from-indigo-600 to-blue-600 text-white rounded-3xl p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
      <div>
        <h3 className="text-3xl font-bold mb-2">
          Travel Smarter with Our App 📱
        </h3>
        <p className="opacity-90">
          Manage bookings, get instant alerts, and exclusive app-only deals.
        </p>
      </div>

      <div className="flex gap-4">
        <button className="btn btn-outline text-white">
          Play Store
        </button>
        <button className="btn btn-outline text-white">
          App Store
        </button>
      </div>
    </div>
  );
};

export default AppDownloadCTA;
