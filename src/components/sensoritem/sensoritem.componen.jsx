import React, { useState } from "react";
import "./sensoritem.componen.scss";
import arrow from "../../Icons/arrow.png";
import redarrow from "../../Icons/redarrow.png";

const SensorItem = ({ title }) => {
  const [check, setCheck] = useState(false);

  const toogelCheck = () => {
    setCheck(!check);
    console.log(check);
  };
  return (
    <div className="sensoritem">
      <div className="container  m-0 p-0 align-items-center">
        <input
          class="check"
          type="checkbox"
          value=""
          id="flexCheckDefault"
          onChange={toogelCheck}
        />
        <span style={check ? { color: "#FF6370" } : {}}>{title}</span>
      </div>

      <img src={check ? redarrow : arrow} />
    </div>
  );
};

export default SensorItem;
