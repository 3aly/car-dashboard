import React from "react";
import { FormInput } from "../../components/form-input/form-input.component";
import { Button } from "../../components/button/button.component";
import "./singin.styles.scss";
import facebooklogo from "../../Icons/Facebook/Vector.png";
import googlelogo from "../../Icons/Logo Google.png";
import { Link } from "react-router-dom";

export const SignIn = () => {
  return (
    <div className="sign-in-container ">
      <div className="row title">
        <h1>Get started</h1>
        <p>
          Dont have an account?
          <Link to="/signup"> Sign Up</Link>
        </p>
      </div>

      <div className="buttons-container">
        <Button buttonType={"google"} imageurl={googlelogo}>
          Sign in with Google
        </Button>

        <Button buttonType={"facebook"} imageurl={facebooklogo}>
          Sign in with Facebook
        </Button>
      </div>

      <div className="separator">
        <div></div>or<div></div>
      </div>
      <form className="form-container">
        <FormInput label="Email" type="Email" required />
        <FormInput label="Password" type="Password" required />
      </form>

      <div className="below-form">
        <div className="row justify-content-between m-2">
          <div className="col-4">
            <input
              className="mx-2"
              type="checkbox"
              id="remember"
              name="vehicle1"
              value="Bike"
            ></input>
            <label for="remember">Remember me</label>
          </div>
          <div className="col-6 text-end">
            <a>Forgot your password?</a>
          </div>
        </div>

        <Button buttonType={"inverted"}>Sign in</Button>
      </div>
    </div>
  );
};
