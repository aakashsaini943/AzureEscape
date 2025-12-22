const PackageCard = ({ pkg }) => {
  return (
    <div className="group rounded-3xl overflow-hidden shadow-xl bg-base-100 hover:scale-105 transition duration-500">
      <div className="relative">
        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-64 w-full object-cover"
        />
        <span className="absolute top-4 left-4 badge badge-secondary">
          {pkg.badge}
        </span>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold mb-1">{pkg.title}</h3>
        <p className="text-sm opacity-70">{pkg.location}</p>

        <div className="flex justify-between items-center mt-4">
          <span className="text-lg font-bold text-primary">
            ${pkg.price}
          </span>
          <span className="text-sm">⭐ {pkg.rating}</span>
        </div>

        <p className="text-sm mt-2 opacity-80">{pkg.duration}</p>

        <button className="btn btn-primary w-full mt-4">
          View Details
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
