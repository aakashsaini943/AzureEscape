import { useState } from "react";

const FlightSearch = () => {
  const [tripType, setTripType] = useState("oneway");
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Bengaluru (BLR)");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [travellers, setTravellers] = useState(1);
  const [travelClass, setTravelClass] = useState("Economy");

  const swapLocations = () => {
    setFrom((prev) => {
      setTo(prev);
      return to;
    });
  };

  const onSearch = () => {
    const payload = {
      tripType,
      from,
      to,
      departure,
      returnDate: tripType === "round" ? returnDate : null,
      travellers,
      travelClass,
    };

    console.log("SEARCH PAYLOAD:", payload);
  };

  return (
    <div className="mmt-search-card" role="form">
      {/* TRIP TYPE */}
      <div className="mmt-trip-type">
        {["oneway", "round", "multi"].map((type) => (
          <label key={type}>
            <input
              type="radio"
              name="trip"
              value={type}
              checked={tripType === type}
              onChange={() => setTripType(type)}
            />
            {type === "oneway"
              ? "One Way"
              : type === "round"
              ? "Round Trip"
              : "Multi City"}
          </label>
        ))}
      </div>

      {/* FIELDS */}
      <div className="mmt-fields">
        <div className="field">
          <small>From</small>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="Departure city"
            aria-label="From city"
          />
          <span className="sub">Departure city</span>
        </div>

        <button
          type="button"
          className="swap"
          onClick={swapLocations}
          aria-label="Swap cities"
          title="Swap cities"
        >
          ⇄
        </button>

        <div className="field">
          <small>To</small>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="Destination city"
            aria-label="To city"
          />
          <span className="sub">Destination city</span>
        </div>

        <div className="field">
          <small>Departure</small>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
            aria-label="Departure date"
          />
        </div>

        <div className={`field ${tripType !== "round" ? "disabled" : ""}`}>
          <small>Return</small>
          <input
            type="date"
            disabled={tripType !== "round"}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            aria-label="Return date"
          />
          {tripType !== "round" && (
            <span className="muted">Round trip only</span>
          )}
        </div>

        <div className="field">
          <small>Travellers & Class</small>
          <select
            value={`${travellers}-${travelClass}`}
            onChange={(e) => {
              const [t, c] = e.target.value.split("-");
              setTravellers(Number(t));
              setTravelClass(c);
            }}
            aria-label="Travellers and class"
          >
            <option value="1-Economy">1 Traveller · Economy</option>
            <option value="2-Economy">2 Travellers · Economy</option>
            <option value="3-Economy">3 Travellers · Economy</option>
            <option value="1-Business">1 Traveller · Business</option>
            <option value="2-Business">2 Travellers · Business</option>
          </select>
        </div>
      </div>

      <button
        type="button"
        className="mmt-search-btn"
        onClick={onSearch}
      >
        SEARCH FLIGHTS
      </button>
    </div>
  );
};

export default FlightSearch;
