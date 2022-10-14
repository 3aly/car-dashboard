import { Fragment } from "react";
import "./button.styles.scss";

const TYPES = {
  google: "google-sign-in",
  inverted: "inverted",
  facebook: "facebook-sign-in",
};
export const Button = ({ children, buttonType, imageurl, ...otherProps }) => {
  return (
    <Fragment>
      <button
        className={`button-container ${TYPES[buttonType]}`}
        {...otherProps}
      >
        <img src={imageurl} />
        <span className="mx-2">{children}</span>
      </button>
    </Fragment>
  );
};
