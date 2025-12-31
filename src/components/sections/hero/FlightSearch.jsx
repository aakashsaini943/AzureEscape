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
    setFrom(to);
    setTo(from);
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
    // later → navigate(`/flights?data=${JSON.stringify(payload)}`)
  };

  return (
    <div className="mmt-search-card">
      {/* TRIP TYPE */}
      <div className="mmt-trip-type">
        <label>
          <input
            type="radio"
            name="trip"
            checked={tripType === "oneway"}
            onChange={() => setTripType("oneway")}
          />
          One Way
        </label>

        <label>
          <input
            type="radio"
            name="trip"
            checked={tripType === "round"}
            onChange={() => setTripType("round")}
          />
          Round Trip
        </label>

        <label>
          <input
            type="radio"
            name="trip"
            checked={tripType === "multi"}
            onChange={() => setTripType("multi")}
          />
          Multi City
        </label>
      </div>

      {/* FIELDS */}
      <div className="mmt-fields">
        {/* FROM */}
        <div className="field">
          <small>From</small>
          <input
            value={from}
            onChange={(e) => setFrom(e.target.value)}
            placeholder="City or Airport"
          />
          <span className="sub">Enter departure city</span>
        </div>

        {/* SWAP */}
        <button className="swap" onClick={swapLocations} title="Swap">
          ⇄
        </button>

        {/* TO */}
        <div className="field">
          <small>To</small>
          <input
            value={to}
            onChange={(e) => setTo(e.target.value)}
            placeholder="City or Airport"
          />
          <span className="sub">Enter destination city</span>
        </div>

        {/* DEPARTURE */}
        <div className="field">
          <small>Departure</small>
          <input
            type="date"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}
          />
        </div>

        {/* RETURN */}
        <div className={`field ${tripType !== "round" ? "disabled" : ""}`}>
          <small>Return</small>
          <input
            type="date"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            disabled={tripType !== "round"}
          />
          {tripType !== "round" && (
            <span className="muted">Round trip only</span>
          )}
        </div>

        {/* TRAVELLERS */}
        <div className="field">
          <small>Travellers & Class</small>
          <select
            value={`${travellers}-${travelClass}`}
            onChange={(e) => {
              const [t, c] = e.target.value.split("-");
              setTravellers(Number(t));
              setTravelClass(c);
            }}
          >
            <option value="1-Economy">1 Traveller, Economy</option>
            <option value="2-Economy">2 Travellers, Economy</option>
            <option value="3-Economy">3 Travellers, Economy</option>
            <option value="1-Business">1 Traveller, Business</option>
            <option value="2-Business">2 Travellers, Business</option>
          </select>
        </div>
      </div>

      {/* SEARCH BUTTON */}
      <button className="mmt-search-btn" onClick={onSearch}>
        SEARCH
      </button>
    </div>
  );
};

export default FlightSearch;
