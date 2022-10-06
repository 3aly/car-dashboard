import React from "react";

import "./form-input.styles.scss";

export const FormInput = ({ label, ...otherProps }) => (
  <div className="group">
    <label>{label}</label>
    <input className="form-input" {...otherProps} />
  </div>
);
