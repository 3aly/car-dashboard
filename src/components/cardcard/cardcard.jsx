import React from "react";
import like from "../../Icons/like.png";
import trans from "../../Icons/trans.png";
import pass from "../../Icons/pass.png";
import "./cardcard.scss";

export const CarCard = ({
  name,
  image,
  type,
  passnegers,
  transmition,
  price,
}) => {
  return (
    <div className="cardcard">
      <div className="container justify-content-between m-0 p-0">
        <p className="m-0">{name}</p>

        <img src={like} className="img-fluid"></img>
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
