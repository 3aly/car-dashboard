import React, { useState, useEffect, useContext } from "react";
import car1 from "../../Icons/cars/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png";
import car2 from "../../Icons/cars/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png";
import car3 from "../../Icons/cars/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png";
import car4 from "../../Icons/cars/white car.png";
import { CarCard } from "../../components/cardcard/cardcard";
import "./booking.scss";
import filter from "../../Icons/filter.png";

import category from "../../Icons/category.png";
import categorydark from "../../Icons/category-dark.png";

import { ThemeContex } from "../../context/theme.contex";

const cars = [
  {
    name: "Porshe 718 Cayman S Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car1,
    state: "used",
  },
  {
    name: "Audi A3 New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
    state: "new",
  },
  {
    name: "Audi A4 Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car3,
    state: "used",
  },
  {
    name: "Suzuki Dzire New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car4,
    state: "new",
  },
  {
    name: "Suzuki Swift Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
    state: "used",
  },
  {
    name: "Mercedes Benz M-class New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car4,
  },
  {
    name: "BMW x6 New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
  },
  {
    name: "BMW x2 Nsed",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car1,
    state: "used",
  },
  {
    name: "BMW x5 Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car3,
  },
];

export const Booking = () => {
  const { theme } = useContext(ThemeContex);

  const [search, setSearch] = useState("");
  const [filterdcars, setFilterdCars] = useState(cars);
  console.log(search);

  useEffect(() => {
    const newfilterd = cars.filter((car) => {
      return car.name.includes(search);
    });
    setFilterdCars(newfilterd);
  }, [search]);

  return (
    <div className="booking">
      <h1>Booking</h1>
      <div className="p-0 container  m-0 search-holder">
        <div className="d-flex">
          {" "}
          <div class="dropdown m-2">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {search === ""
                ? "State"
                : search === "Porshe"
                ? "State"
                : search === "Audi"
                ? "State"
                : search === "Suzuki"
                ? "State"
                : search === "Mercedes"
                ? "State"
                : search === "BMW"
                ? "State"
                : search}
            </button>
            <ul class="dropdown-menu">
              <li>
                <option
                  class="dropdown-item"
                  value=""
                  onClick={(e) => setSearch(e.target.value)}
                >
                  All
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  value="New"
                  onClick={(e) => setSearch(e.target.value)}
                >
                  New
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  onClick={(e) => setSearch(e.target.value)}
                  value="Used"
                >
                  Used
                </option>
              </li>
            </ul>
          </div>
          <div class="dropdown m-2">
            <button
              class="btn btn-secondary dropdown-toggle "
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {search === ""
                ? "Manufacturer"
                : search === "Used"
                ? "Manufacturer"
                : search === "New"
                ? "Manufacturer"
                : search}
            </button>
            <ul class="dropdown-menu">
              <li>
                <option
                  class="dropdown-item"
                  value=""
                  onClick={(e) => setSearch(e.target.value)}
                >
                  All
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  value="Audi"
                  onClick={(e) => setSearch(e.target.value)}
                >
                  Audi
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  onClick={(e) => setSearch(e.target.value)}
                  value="Porshe"
                >
                  Porshe
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  onClick={(e) => setSearch(e.target.value)}
                  value="Mercedes"
                >
                  Mercedes
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  onClick={(e) => setSearch(e.target.value)}
                  value="Suzuki"
                >
                  Suzuki
                </option>
              </li>
              <li>
                <option
                  class="dropdown-item"
                  onClick={(e) => setSearch(e.target.value)}
                  value="BMW"
                >
                  BMW
                </option>
              </li>
            </ul>
          </div>
        </div>
        <div className="d-flex align-items-center">
          <img
            className="mt-1"
            src={theme === "dark" ? categorydark : category}
          />
          <img src={filter} />
        </div>
      </div>
      <div className="cars-contianer">
        {filterdcars.map((car) => (
          <CarCard
            name={car.name}
            image={car.image}
            type={car.type}
            transmition={car.transmition}
            price={car.pice}
            passnegers={car.passnegers}
          />
        ))}
      </div>
    </div>
  );
};
