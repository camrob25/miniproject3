import React, { useState, useEffect } from 'react';
import './CarRentalPage.css'; // Link to the CSS file

const CarRentalPage = () => {
  const [filteredCars, setFilteredCars] = useState(cars);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [sortOrder, setSortOrder] = useState('price_lohi');

  useEffect(() => {
    filterCars();
  }, [searchQuery, selectedCategory, sortOrder]);

  const cars = [
    // Economy
    {title: "Economy", category: "Economy", price: 64.09, description: "Mitsubishi Mirage", company:"Enterprise", image: "./components/mirage.jpg", rating: 4.8, mpg: 39.5, seats: 5,reserveUrl:"https://www.enterprise.com/en/reserve.html#review"},
    {title: "Economy", category: "Economy", price: 46, description: "Chevrolet Spark",company:"Hertz",  image: "./components/spark.jpg", rating: 4.8, mpg: 35, seats:4,reserveUrl:"https://www.hertz.ca/rentacar/reservation/#extras"},
    {title: "Economy", category: "Economy", price: 61, description: "Hyundai Veloster or", company:"Thrifty", image: "./components/veloster.jpg", rating: 4.6, mpg: 30.5, zeroToSixty: 6.2, seats:4,reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV&rateQuoteIds=,RCU28%7CVSJJKN7FC872094-41%7C1&sippCode=EDAR"},

    // Midsize
    {title: "Mid-size", category: "Mid-size", price: 61, description: "Chevrolet Cruze",company:"Thrifty",  image: "./components/cruze.jpg", rating: 4.8, mpg: 42.7, zeroToSixty: 6.0, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV&rateQuoteIds=,RCU28%7CYSRAHAM52W72100-41%7C1&sippCode=IDAR"},
    {title: "Mid-size", category: "Mid-size", price: 46, description: "Mazda 3", company:"Hertz",  image: "./components/mazda.jpg", rating: 4.4, mpg: 31, zeroToSixty: 7.0, seats: 5, reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7C7FZBJID2LG72050-41%7C5,RCUD1%7C7FZBJID2LG72050-41%7C6&sippCode=ICAR&travelType=LEISURE"},
    {title: "Mid-size", category: "Mid-size", price: 64.98, description: "Toyota Corolla",company:"Enterprise",  image: "./components/corolla.jpg", rating: 4.5, mpg: 35, zeroToSixty: 8.5, seats: 5, reservUrl:"https://www.enterprise.com/en/reserve.html#review"},

    // Luxury
    {title: "Luxury", category: "Luxury", price: 117, description: "Chrysler 300", company:"Thrifty", image: "./components/chrystler.jpg", rating: 4.8, mpg: 24.5, zeroToSixty: 5.8, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV&rateQuoteIds=,RCU28%7CSDH0QA4SWO72082-41%7C1&sippCode=LDAR"},
    {title: "Luxury", category: "Luxury", price: 149, description: "Audi A3 or similar", company:"Enterprise", image: "./components/audi.jpg", rating: 4.8, mpg: 29, zeroToSixty: 5.3, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

    // Full-size
    {title: "Full-size", category: "Full-size", price: 56, description: "Kia Optima or similar", company:"Thrifty", image: "./components/kia.jpg", rating: 4.7, mpg: 27, zeroToSixty: 4.3, seats: 5, reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV&rateQuoteIds=,RCU28%7C8QIIPRIH5K72110-41%7C1&sippCode=FDAR"},
    {title: "Full-size", category: "Full-size", price: 48, description: "Chevrolet Malibu",company:"Hertz",  image: "./components/malibu.jpg", rating: 4.9, mpg: 19, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7C75D4HBIG1072089-41%7C9,RCUD1%7C75D4HBIG1072089-41%7C10&sippCode=FCAR&travelType=LEISURE"},
    {title: "Full-size", category: "Full-size", price: 66.98, description: "Toyota Camry",company:"Enterprise",  image: "./components/camry.jpg", rating: 4.9, mpg: 28, zeroToSixty: 4.2, seats: 4, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

    // Mid-Size SUV
    {title: "Mid-Size SUV", category: "Mid-Size SUV", price: 71, description: "Jeep Compass",company:"Thrifty",  image: "./components/jeepCompass.jpg", rating: 4.7, mpg: 27, zeroToSixty: 4.3, seats: 5,reserveUrl:"https://www.thrifty.com/us/en/book/ancillaries/coverage?ddate=2025-03-05T13%3A00%3A00&did=SHV&pCountryCode=US&pdate=2025-02-03T12%3A00%3A00&pid=SHV&rateQuoteIds=,RCU28%7C2S81P0V18872082-41%7C1&sippCode=IFAR"},
    {title: "Mid-Size SUV", category: "Mid-Size SUV", price: 75.98, description: "Nissan Rogue",company:"Hertz",  image: "./components/NissanRogue.jpg", rating: 4.9, mpg: 33.5, zeroToSixty: 4.0, seats: 4,reserveUrl:"https://www.hertz.com/us/en/book/ancillaries/coverage?CDP=2278478&age=25&ddate=2025-02-05T12%3A00%3A00&did=SHVT11&pCountryCode=US&pdate=2025-02-04T12%3A00%3A00&pid=SHVT11&rateQuoteIds=VCPD1%7CFP6LHIE20472110-41%7C14,RCUD1%7CFP6LHIE20472110-41%7C13&sippCode=IFAR&travelType=LEISURE"},

    // Full-Size SUV
    {title: " Full-Size SUV", category: "Full-Size SUV", price: 126.80, description: "Chevrolet Tahoe or similar",company:"Enterprise",  image: "./components/tahoe.jpg", rating: 4.7, mpg: 18, zeroToSixty: 4.3, seats: 7, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"},

    // Trucks
    {title: "Trucks", category: "Trucks", price: 63.99, description: "Toyota Tacoma",company:"Enterprise",  image: "./components/tacoma.jpg", rating: 4.7, mpg: 23, zeroToSixty: 4.3, seats: 5, reserveUrl:"https://www.enterprise.com/en/reserve.html#extras"}

    ];

  const getStarRating = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = (rating % 1) >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStar;

    let stars = '';
    for (let i = 0; i < fullStars; i++) {
      stars += '★';
    }
    for (let i = 0; i < halfStar; i++) {
      stars += '☆';
    }
    for (let i = 0; i < emptyStars; i++) {
      stars += '☆';
    }
    return stars;
  };

  const reserveCar = (reserveUrl) => {
    window.location.href = reserveUrl;
  };

  const filterCars = () => {
    let filteredCars = cars;

    if (searchQuery) {
      filteredCars = filteredCars.filter(car => car.description.toLowerCase().includes(searchQuery.toLowerCase()));
    }

    if (selectedCategory) {
      filteredCars = filteredCars.filter(car => car.category.toLowerCase() === selectedCategory.toLowerCase());
    }

    if (sortOrder === 'price_lohi') {
      filteredCars.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'price_highlo') {
      filteredCars.sort((a, b) => b.price - a.price);
    } else if (sortOrder === 'rating') {
      filteredCars.sort((a, b) => b.rating - a.rating);
    }

    setFilteredCars(filteredCars);
  };

  return (
    <div>
      <div className="Cnavbar">
      <CNavbar />
      </div>

      <div className="container my-4">
        <div className="filter-container">
          <select className="form-select" id="car-category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
            <option value="">Select Car Category</option>
            <option value="economy">Economy</option>
            <option value="luxury">Luxury</option>
            <option value="Mid-size SUV">Mid-size SUV</option>
            <option value="Full-size SUV">Full-size SUV</option>
            <option value="Mid-size">Mid-size</option>
            <option value="Full-size">Full-size</option>
            <option value="Trucks">Trucks</option>
          </select>

          <select className="form-select" id="sort-order" value={sortOrder} onChange={(e) => setSortOrder(e.target.value)}>
            <option value="price_lohi">Price: Low to High</option>
            <option value="price_highlo">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>

          <div className="search-container">
            <input type="text" className="form-control" id="search-car" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} placeholder="Search for a car..." />
          </div>
        </div>

        <div className="row" id="car-list">
          {filteredCars.map(car => (
            <div className="col-lg-4 col-md-6 col-sm-12 car-card" key={car.title} data-category={car.category}>
              <img src={car.image} alt={car.title} />
              <div className="card-body">
                <h5 className="card-title">{car.title}</h5>
                <p className="card-text">{car.description}</p>
                <p className="card-text">({car.company})</p>
                <div className="price">${car.price}/day</div>
                <div className="seats">👤{car.seats}</div>
                <div className="ratings">{getStarRating(car.rating)}</div>
                <div>
                  <button className="reserve-button" onClick={() => reserveCar(car.reserveUrl)}>Reserve</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <footer className="Cfooter">
        <p>&copy; 2025 Voyage. All Rights Reserved.</p>
        <p><a href="#">Policy</a> | <a href="#">Terms of Service</a></p>
      </footer>
    </div>
  );
};

export default CarRentalPage;