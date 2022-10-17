import "./App.css";
import { SignUp } from "./pages/singup/singup";
import { SignIn } from "./pages/singin/singin";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
import { Home } from "./pages/home/home.component";
import { NavSystem } from "./pages/navigation system/navsystem";
import { Booking } from "./pages/booking/booking";
import { Assets } from "./pages/assets/assets";
import { createContext, useContext, useState } from "react";
import { ThemeContex } from "./context/theme.contex";
import { DashBoard } from "../src/pages/dashboard/dashboard.jsx";
import Calender from "./pages/Calender/Calender.jsx";
import Messages from "./pages/Messages/Messages";

function App() {
  const { theme } = useContext(ThemeContex);
  return (
    <div className="App" id={theme}>
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="/" element={<NavSystem />}>
          <Route exact path="settings" element={<Home />} />
          <Route exact path="dashboard" element={<DashBoard />} />
          <Route exact path="calender" element={<Calender />} />

          <Route exact path="booking" element={<Booking />} />
          <Route exact path="assets" element={<Assets />} />
        </Route>
        <Route exact path="messages" element={<Messages />} />
      </Routes>
    </div>
  );
}

export default App;
