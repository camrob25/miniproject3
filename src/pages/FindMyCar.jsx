import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./FindMyCar.css";

const cars = [
  { title: "Economy", category: "Economy", price: 64.09, description: "Mitsubishi Mirage", image: "mirage.jpg", rating: 4.8, mpg: 39.5, seats: 5, reserveUrl: "https://www.enterprise.com/en/reserve.html#review" },
  { title: "Economy", category: "Economy", price: 46, description: "Chevrolet Spark", image: "spark.jpg", rating: 4.8, mpg: 35, seats: 2, reserveUrl: "https://www.hertz.ca/rentacar/reservation/#extras" },
  { title: "Economy", category: "Economy", price: 61, description: "Hyundai Veloster", image: "veloster.jpg", rating: 4.6, mpg: 30.5, seats: 2, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Mid-size", category: "Mid-size", price: 62, description: "Chevrolet Cruze", image: "cruze.jpg", rating: 4.8, mpg: 42.7, seats: 5, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Luxury", category: "Luxury", price: 117, description: "Chrysler 300", image: "chrystler.jpg", rating: 4.8, mpg: 24.5, seats: 5, reserveUrl: "https://www.thrifty.com/us/en/book/ancillaries/coverage" },
  { title: "Trucks", category: "Trucks", price: 63.99, description: "Toyota Tacoma", image: "tacoma.jpg", rating: 4.7, mpg: 23, seats: 5, reserveUrl: "https://www.enterprise.com/en/reserve.html#extras" }
];

const FindMyCar = () => {
  const [groupSize, setGroupSize] = useState("1-2");
  const [purpose, setPurpose] = useState("business");
  const [budget, setBudget] = useState("economy");
  const [filteredCars, setFilteredCars] = useState([]);
  const navigate = useNavigate();

  const findCar = () => {
    let results = cars.filter(car => {
      if (purpose === "Moving" && car.category.toLowerCase().includes("trucks")) return true;
      if (budget === "economy" && car.category === "Economy") return true;
      if (budget === "mid" && car.category === "Mid-size") return true;
      if (budget === "luxury" && car.category.toLowerCase().includes("luxury")) return true;
      if (groupSize === "5+" && (car.category.includes("SUV") || car.category.includes("Full-size"))) return true;
      return false;
    });

    setFilteredCars(results);
  };

  return (
    <div className="container">
      <h1>Questionnaire</h1>
      <p>Answer a few questions to find the best vehicle for you!</p>

      <div className="question">
        <label>How many people are traveling?</label>
        <select value={groupSize} onChange={e => setGroupSize(e.target.value)}>
          <option value="1-2">1-2</option>
          <option value="3-4">3-4</option>
          <option value="5+">5 or more</option>
        </select>
      </div>

      <div className="question">
        <label>What is the purpose of your trip?</label>
        <select value={purpose} onChange={e => setPurpose(e.target.value)}>
          <option value="business">Business</option>
          <option value="leisure">Leisure</option>
          <option value="family">Family Trip</option>
          <option value="Moving">Moving/Towing</option>
        </select>
      </div>

      <div className="question">
        <label>What is your budget?</label>
        <select value={budget} onChange={e => setBudget(e.target.value)}>
          <option value="economy">Economy</option>
          <option value="mid">Mid-size</option>
          <option value="luxury">Luxury</option>
          <option value="Trucks">Trucks</option>
        </select>
      </div>

      <button onClick={findCar}>Find My Car</button>
      <button className="back-button" onClick={() => navigate("/car-rental")}>Go back to cars</button>

      <div id="result">
        {filteredCars.length > 0 ? (
          <>
            <h2>Recommended Cars:</h2>
            {filteredCars.map((car, index) => (
              <div key={index} className="car-card">
                <img src={car.image} alt={car.description} width="150" />
                <p>{car.description} - ${car.price}/day</p>
                <a href={car.reserveUrl} target="_blank" rel="noopener noreferrer">Reserve</a>
              </div>
            ))}
          </>
        ) : null}
      </div>
    </div>
  );
};

export default FindMyCar;
