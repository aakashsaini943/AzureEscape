import React, { useState } from "react";
import "./hero.styles.css";

const CITIES = [
  { city: "Delhi", code: "DEL", airport: "Delhi Airport India" },
  { city: "Bengaluru", code: "BLR", airport: "Bengaluru International Airport" },
  { city: "Mumbai", code: "BOM", airport: "Mumbai International Airport" },
  { city: "Hyderabad", code: "HYD", airport: "Rajiv Gandhi International Airport" },
];

export default function FlightSearch() {
  const [tripType, setTripType] = useState("ONE");

  const [fromCity, setFromCity] = useState(CITIES[0]);
  const [toCity, setToCity] = useState(CITIES[1]);

  const [activeDropdown, setActiveDropdown] = useState(null);

  const [departureDate, setDepartureDate] = useState("");
  const [returnDate, setReturnDate] = useState("");

  const [travellerClass, setTravellerClass] = useState(
    "1 Traveller · Economy"
  );

  const handleSwap = () => {
    const temp = fromCity;
    setFromCity(toCity);
    setToCity(temp);
  };

  const handleSearch = () => {
    const payload = {
      tripType,
      from: fromCity,
      to: toCity,
      departureDate,
      returnDate: tripType === "ROUND" ? returnDate : null,
      travellerClass,
    };

    console.log("SEARCH PAYLOAD:", payload);
    alert("Search triggered. Check console.");
  };

  return (
    <div className="fs-wrapper">
      {/* Header */}
      <div className="fs-header">
        <div className="fs-trip">
          <label>
            <input
              type="radio"
              checked={tripType === "ONE"}
              onChange={() => setTripType("ONE")}
            />
            One Way
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "ROUND"}
              onChange={() => setTripType("ROUND")}
            />
            Round Trip
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "MULTI"}
              onChange={() => setTripType("MULTI")}
            />
            Multi
          </label>
        </div>

        <span className="fs-title">
          Book International and Domestic Flights
        </span>
      </div>

      {/* Search Card */}
      <div className="fs-card">
        {/* FROM */}
        <div
          className="fs-block"
          onClick={() => setActiveDropdown("from")}
        >
          <small>From</small>
          <h2>{fromCity.city}</h2>
          <p>
            {fromCity.code}, {fromCity.airport}
          </p>

          {activeDropdown === "from" && (
            <ul className="dropdown">
              {CITIES.map((city) => (
                <li
                  key={city.code}
                  onClick={() => {
                    setFromCity(city);
                    setActiveDropdown(null);
                  }}
                >
                  <strong>
                    {city.city} ({city.code})
                  </strong>
                  <em>{city.airport}</em>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* SWAP */}
        <button className="swap-btn" onClick={handleSwap}>
          ⇄
        </button>

        {/* TO */}
        <div
          className="fs-block"
          onClick={() => setActiveDropdown("to")}
        >
          <small>To</small>
          <h2>{toCity.city}</h2>
          <p>
            {toCity.code}, {toCity.airport}
          </p>

          {activeDropdown === "to" && (
            <ul className="dropdown">
              {CITIES.map((city) => (
                <li
                  key={city.code}
                  onClick={() => {
                    setToCity(city);
                    setActiveDropdown(null);
                  }}
                >
                  <strong>
                    {city.city} ({city.code})
                  </strong>
                  <em>{city.airport}</em>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* DEPARTURE */}
        <div className="fs-block">
          <small>Departure</small>
          <h2>{departureDate || "Select Date"}</h2>
          <input
          
            type="date"
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
          />
        </div>

        {/* RETURN */}
        <div className={`fs-block ${tripType === "ONE" ? "disabled" : ""}`}>
          <small>Return</small>
          <h2>{returnDate || "Tap to add date"}</h2>
          <input
            type="date"
            disabled={tripType === "ONE"}
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
          />
          {tripType !== "ONE" && (
            <p className="hint">For bigger discounts</p>
          )}
        </div>

        {/* TRAVELLERS */}
        <div className="fs-block">
          <small>Travellers & Class</small>
          <h2>{travellerClass.split("·")[0]}</h2>
          <p>Economy / Premium Economy</p>

          <select
            value={travellerClass}
            onChange={(e) => setTravellerClass(e.target.value)}
          >
            <option>1 Traveller · Economy</option>
            <option>2 Travellers · Economy</option>
            <option>1 Traveller · Business</option>
          </select>
        </div>
      </div>

      <button className="search-btn" onClick={handleSearch}>
        SEARCH FLIGHTS
      </button>
    </div>
  );
}
