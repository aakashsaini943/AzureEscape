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
  const [travellerClass, setTravellerClass] = useState("1 Traveller · Economy");

  const isMobile = window.innerWidth <= 768;

  const handleSwap = () => {
    setFromCity(toCity);
    setToCity(fromCity);
  };

  const handleSearch = () => {
    console.log({
      tripType,
      fromCity,
      toCity,
      departureDate,
      returnDate,
      travellerClass,
    });
    alert("Search triggered. Check console.");
  };

  return (
    <div className="fs-wrapper">

      {/* HEADER */}
      <div className="fs-header">
        <div className="fs-trip">
          {["ONE", "ROUND", "MULTI"].map((t) => (
            <label key={t}>
              <input
                type="radio"
                checked={tripType === t}
                onChange={() => setTripType(t)}
              />
              {t === "ONE" ? "One Way" : t === "ROUND" ? "Round Trip" : "Multi"}
            </label>
          ))}
        </div>

        <span className="fs-title">
          Book International and Domestic Flights
        </span>
      </div>

      {/* ================= DESKTOP UI ================= */}
      {!isMobile && (
        <div className="fs-card">

          <div className="fs-block" onClick={() => setActiveDropdown("from")}>
            <small>From</small>
            <h2>{fromCity.city}</h2>
            <p>{fromCity.code}, {fromCity.airport}</p>

            {activeDropdown === "from" && (
              <ul className="dropdown">
                {CITIES.map((city) => (
                  <li key={city.code} onClick={() => {
                    setFromCity(city);
                    setActiveDropdown(null);
                  }}>
                    <strong>{city.city} ({city.code})</strong>
                    <em>{city.airport}</em>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <button className="swap-btn" onClick={handleSwap}>⇄</button>

          <div className="fs-block" onClick={() => setActiveDropdown("to")}>
            <small>To</small>
            <h2>{toCity.city}</h2>
            <p>{toCity.code}, {toCity.airport}</p>

            {activeDropdown === "to" && (
              <ul className="dropdown">
                {CITIES.map((city) => (
                  <li key={city.code} onClick={() => {
                    setToCity(city);
                    setActiveDropdown(null);
                  }}>
                    <strong>{city.city} ({city.code})</strong>
                    <em>{city.airport}</em>
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="fs-block">
            <small>Departure</small>
            <input type="date" value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)} />
          </div>

          <div className={`fs-block ${tripType === "ONE" ? "disabled" : ""}`}>
            <small>Return</small>
            <input type="date" disabled={tripType === "ONE"}
              value={returnDate}
              onChange={(e) => setReturnDate(e.target.value)} />
          </div>

          <div className="fs-block">
            <small>Travellers</small>
            <select value={travellerClass}
              onChange={(e) => setTravellerClass(e.target.value)}>
              <option>1 Traveller · Economy</option>
              <option>2 Travellers · Economy</option>
              <option>1 Traveller · Business</option>
            </select>
          </div>
        </div>
      )}

      {/* ================= MOBILE UI ================= */}
      {isMobile && (
        <div className="fs-mobile-card">

          <div className="fs-m-row" onClick={() => setActiveDropdown("from")}>
            <span>From</span>
            <strong>{fromCity.city} ({fromCity.code})</strong>
          </div>

          <div className="fs-m-row" onClick={() => setActiveDropdown("to")}>
            <span>To</span>
            <strong>{toCity.city} ({toCity.code})</strong>
          </div>

          <div className="fs-m-row">
            <span>Departure</span>
            <input type="date" value={departureDate}
              onChange={(e) => setDepartureDate(e.target.value)} />
          </div>

          {tripType !== "ONE" && (
            <div className="fs-m-row">
              <span>Return</span>
              <input type="date" value={returnDate}
                onChange={(e) => setReturnDate(e.target.value)} />
            </div>
          )}

          <div className="fs-m-row">
            <span>Travellers</span>
            <select value={travellerClass}
              onChange={(e) => setTravellerClass(e.target.value)}>
              <option>1 Traveller · Economy</option>
              <option>2 Travellers · Economy</option>
              <option>1 Traveller · Business</option>
            </select>
          </div>
        </div>
      )}

      <button className="search-btn" onClick={handleSearch}>
        SEARCH FLIGHTS
      </button>
    </div>
  );
}
