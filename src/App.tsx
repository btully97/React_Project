import {
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./pages/index";
import {Users} from "./pages/myUsers";  
import {BirthdayCountdown} from "./pages/birdayCountdown";
import { NavBar } from "./components/NavBar";
import "./pages/app.css";
export default function App() {
  const location = useLocation();

  return (
    <div>
      <NavBar location={location} />
      <div style={{ padding: "20px" }}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
          <Route path="/birthdayCountdown" component={BirthdayCountdown} />
        </Switch>
      </div>
    </div>
  );
}
