import React, { useState, useContext, Fragment } from "react";
import { FormInput } from "../../components/form-input/form-input.component";
import { Button } from "../../components/button/button.component";
import "./singup.styles.scss";
import facebooklogo from "../../Icons/Facebook/Vector.png";
import googlelogo from "../../Icons/Logo Google.png";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/user.context";
import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";
import { createUserDocumnetFromAuth } from "../../utils/firebase/firebase.utils";
import {
  signInWithGooglePopup,
  signinAuthUserWithEmailAndPassword,
} from "../../utils/firebase/firebase.utils";
import { ThemeContex } from "../../context/theme.contex";

import Switch from "react-switch";

const defultFormField = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

export const SignUp = () => {
  const { theme, toggleTheme } = useContext(ThemeContex);

  const signInWithGoogle = async () => {
    await signInWithGooglePopup();
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };
  const resetFormFields = () => {
    setFormFields(defultFormField);
  };

  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(defultFormField);

  const { firstName, lastName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("passwords do not match");
      return;
    }

    try {
      const { user } = await createAuthUserWithEmailAndPassword(
        email,
        password
      );

      await createUserDocumnetFromAuth(user, { firstName });
      resetFormFields();
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        alert("Cannot create user, email already in use");
      } else {
        console.log("user creation encountered an error", error);
      }
    }
  };
  return (
    <Fragment>
      <div className="sign-in-container" id={theme}>
        <div className="row title">
          <h1>Get started</h1>
          <p>
            Dont have an account?
            <Link to="/signin"> Sign In</Link>
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
        <form
          className="form-container"
          onSubmit={handleSubmit}
          onChange={console.log(formFields)}
        >
          <FormInput
            label="First Name"
            type="text"
            required
            onChange={handleChange}
            name="firstName"
            value={firstName}
          />
          <FormInput
            label="Last Name"
            type="text"
            required
            onChange={handleChange}
            name="lastName"
            value={lastName}
          />
          <FormInput
            label="Email"
            type="email"
            required
            onChange={handleChange}
            name="email"
            value={email}
          />
          <FormInput
            label="Password"
            type="password"
            required
            onChange={handleChange}
            name="password"
            value={password}
          />
          <FormInput
            label="Confirm Password"
            type="password"
            required
            onChange={handleChange}
            name="confirmPassword"
            value={confirmPassword}
          />
        </form>
        <div className="below-form">
          <div className="row justify-content-between m-2">
            <div className="col-6">
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
    </Fragment>
  );
};
