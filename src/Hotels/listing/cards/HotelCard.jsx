// HotelCard.jsx
const HotelCard = () => {


function handelviewbtn () {
  alert("items did not aded yet")
}

  return (
    <div className="group relative rounded-2xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
      
      {/* Gradient hover accent */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-500/10 to-indigo-500/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      {/* Content */}
      <div className="relative">
        <h3 className="text-lg font-semibold text-gray-800 transition-colors duration-300 group-hover:text-sky-600">
          Hotel Name
        </h3>

        <p className="mt-1 text-sm text-gray-500">
          City · Prime Location
        </p>

        {/* Rating */}
        <div className="mt-3 flex items-center gap-1 text-sm text-yellow-500">
          ★★★★☆
          <span className="ml-1 text-gray-500">(4.5)</span>
        </div>

        {/* Price + CTA */}
        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-sky-500">
            ₹4,999
            <span className="text-sm font-normal text-gray-500"> / night</span>
          </p>

          <button onClick={handelviewbtn} className="rounded-lg bg-sky-500 px-4 py-2 text-sm font-medium text-white transition-colors duration-300 hover:bg-sky-600">
            View
          </button>
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
