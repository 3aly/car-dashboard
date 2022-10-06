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
function App() {
  return (
    <Routes>
      <Route path="/" element={<NavSystem />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="signin" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
