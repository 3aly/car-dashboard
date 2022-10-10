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
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />

        <Route path="/" element={<NavSystem />}>
          <Route exact path="settings" element={<Home />} />
          <Route exact path="booking" element={<Booking />} />
          <Route exact path="assets" element={<Assets />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
