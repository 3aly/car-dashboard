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
import { LikeContex } from "../../context/like.context";
import { CarsContex } from "../../context/cars.context";

export const Booking = () => {
  const { theme } = useContext(ThemeContex);
  const { like } = useContext(LikeContex);
  const [search, setSearch] = useState("");
  const { carr, setCarr } = useContext(CarsContex);
  const [filterdcars, setFilterdCars] = useState(carr);

  const filterFav = () => {
    const newfilterd = carr.filter((car) => {
      return car.fav === true;
    });
    setFilterdCars(newfilterd);
  };

  useEffect(() => {
    const newfilterd = carr.filter((car) => {
      return car.name.includes(search);
    });
    setFilterdCars(newfilterd);
  }, [search, carr]);

  console.log(carr);

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
              <li>
                <option class="dropdown-item" onClick={filterFav}>
                  Favorite
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
          <div>
            <CarCard
              name={car.name}
              image={car.image}
              type={car.type}
              transmition={car.transmition}
              price={car.pice}
              passnegers={car.passnegers}
              fav={car.fav}
              idd={car.id}
            />
          </div>
        ))}
      </div>
    </div>
  );
};
