import React, { Fragment, useContext } from "react";
import { FormInput } from "../../components/form-input/form-input.component";
import { Button } from "../../components/button/button.component";
import "./singin.styles.scss";
import facebooklogo from "../../Icons/Facebook/Vector.png";
import googlelogo from "../../Icons/Logo Google.png";
import { Link } from "react-router-dom";
import { ThemeContex } from "../../context/theme.contex";
import Switch from "react-switch";
export const SignIn = () => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  return (
    <div className="main">
      <div className="sign-in-container" id={theme}>
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
                class="form-check-input mx-3 "
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />

              <label for="remember">Remember me</label>
            </div>
            <div className="col-6 text-end">
              <a>Forgot your password?</a>
            </div>
          </div>

          <Button buttonType={"inverted"}>Sign in</Button>
        </div>
        <Switch onChange={toggleTheme} checked={theme == "dark"} />
        <label className="m-2">{theme} Mode</label>
      </div>
    </div>
  );
};
