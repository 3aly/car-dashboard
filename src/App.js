import "./App.css";
import { SignUp } from "./pages/singup/singup";
import { SignIn } from "./pages/singin/singin";
import SideBar from "./components/sidebar/sidebar.component.jsx";
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Routes,
  Outlet,
} from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="signup" element={<SignUp />} />
      <Route path="signin" element={<SignIn />} />
      <Route path="/" element={<SideBar />} />
    </Routes>
  );
}

export default App;
