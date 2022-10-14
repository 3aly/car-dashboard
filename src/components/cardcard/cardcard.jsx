import React, { useContext, useEffect, useState } from "react";
import unfav from "../../Icons/like.png";
import favorite from "../../Icons/favorite.png";
import trans from "../../Icons/trans.png";
import pass from "../../Icons/pass.png";
import "./cardcard.scss";
import { ThemeContex } from "../../context/theme.contex";
import { LikeContex } from "../../context/like.context";
import { CarsContex } from "../../context/cars.context";

export const CarCard = ({
  name,
  image,
  type,
  passnegers,
  transmition,
  price,
  idd,
  fav,
}) => {
  const { theme } = useContext(ThemeContex);
  const { carr, setCarr } = useContext(CarsContex);
  const [check, setCheck] = useState(false);
  const toogelCheck = (idd) => {
    setCheck(!check);

    const newState = carr.map((obj) => {
      if (obj.id === idd) {
        return { ...obj, fav: !check };
      }

      // 👇️ otherwise return object as is
      return obj;
    });

    setCarr(newState);
  };

  return (
    <div className="cardcard" id={theme}>
      <div className="container justify-content-between m-0 p-0">
        <p className="m-0">{name}</p>{" "}
        <img
          src={fav ? favorite : unfav}
          className="img-fluid"
          onClick={() => {
            toogelCheck(idd);
          }}
        />
      </div>
      <div className="container p-0 m-0">{type}</div>
      <img src={image} />

      <div className="container p-0 justify-content-between m-0">
        {" "}
        <div className="contianer ">
          {" "}
          <img src={pass} />
          <span className="mx-2">{passnegers}</span>
          <img src={trans} />
          <span className="mx-2">{transmition}</span>
        </div>
        <span>{price}</span>
      </div>
    </div>
  );
};
