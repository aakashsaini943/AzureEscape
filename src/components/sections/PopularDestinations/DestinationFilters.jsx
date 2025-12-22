// const filters = ["All", "Asia", "Europe", "Middle East"];

// const DestinationFilters = ({ setRegion }) => {
//   return (
//     <div className="flex flex-wrap gap-4">
//       {filters.map((f) => (
//         <button
//           key={f}
//           className="btn btn-outline"
//           onClick={() => setRegion(f)}
//         >
//           {f}
//         </button>
//       ))}
//     </div>
//   );
// };

// export default DestinationFilters;



const filters = ["All", "Asia", "Europe", "Middle East"];

const DestinationFilters = ({ region, setRegion }) => {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {filters.map((f) => (
        <button
          key={f}
          onClick={() => setRegion(f)}
          className={`
            px-5 py-2 rounded-full text-sm font-medium
            transition-all duration-300
            border
            ${
              region === f
                ? "bg-primary text-white border-primary shadow-md scale-105"
                : "bg-white text-gray-600 border-gray-200 hover:bg-primary/10 hover:text-primary"
            }
          `}
        >
          {f}
        </button>
      ))}
    </div>
  );
};

export default DestinationFilters;
