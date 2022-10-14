import React, { createContext, useState } from "react";
import car1 from "../Icons/cars/2014-mercedes-benz-m-class-2012-mercedes-benz-m-class-2008-mercedes-benz-m-class-sport-utility-vehicle-mercedes-car-png-image-8230b0372dd015bcf5312eb17e2751ee.png";
import car2 from "../Icons/cars/car-audi-a3-audi-a4-car-3822c2bc08e2c2bce1d8ead0e70c7ddb.png";
import car3 from "../Icons/cars/maruti-suzuki-dzire-car-suzuki-ertiga-swift-dzire-f8a7d4ae19bd1c349dc080d9081ffd31.png";
import car4 from "../Icons/cars/white car.png";

const cars = [
  {
    name: "Porshe 718 Cayman S Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car1,
    state: "used",
    id: 1,
    fav: false,
  },
  {
    name: "Audi A3 New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
    state: "new",
    id: 2,

    fav: false,
  },
  {
    name: "Audi A4 Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car3,
    state: "used",
    id: 3,
    fav: false,
  },
  {
    name: "Suzuki Dzire New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car4,
    state: "new",
    id: 4,

    fav: false,
  },
  {
    name: "Suzuki Swift Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
    state: "used",
    id: 5,
    fav: false,
  },
  {
    name: "Mercedes Benz M-class New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car4,
    id: 6,
    fav: false,
  },
  {
    name: "BMW x6 New",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car2,
    id: 7,
    fav: false,
  },
  {
    name: "BMW x2 Nsed",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car1,
    state: "used",
    id: 8,
    fav: false,
  },
  {
    name: "BMW x5 Used",
    type: "Coupe",
    passnegers: "4",
    transmition: "Manual",
    pice: "$400/d",
    image: car3,
    id: 9,
    fav: false,
  },
];

export const CarsContex = createContext("");

export const CarsProvider = ({ children }) => {
  const [carr, setCarr] = useState(cars);

  return (
    <CarsContex.Provider value={{ carr, setCarr }}>
      {children}
    </CarsContex.Provider>
  );
};
