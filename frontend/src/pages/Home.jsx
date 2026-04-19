import { useEffect, useState } from "react";
import API from "../services/api";

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    API.get("/cars").then(res => setCars(res.data));
  }, []);

  return (
    <div>
      <h2>Car Listings</h2>
      {cars.map(car => (
        <div key={car._id}>
          <h3>{car.brand} {car.model}</h3>
          <p>₹{car.price}</p>
        </div>
      ))}
    </div>
  );
}