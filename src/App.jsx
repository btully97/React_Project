import React from "react";
import {
  Route,
  Switch,
  Link,
  useLocation,
} from "react-router-dom";
import Home from "./pages/index.jsx";
import Users from "./pages/users.jsx";
import DateProject from "./pages/date-project.jsx";
import DataFetchPage from "./pages/dataFetchPage.jsx";
import DataFetchPageWithReactQuery from "./pages/dataFetchPageWithReactQuery.jsx";
import "./pages/app.css";
export default function App() {
  let location = useLocation();

  return (
    <div>
      <nav>
        <Link to="/" className={location.pathname === "/" ? "active-link" : ""}>Home</Link>
        <Link to="/users" className={location.pathname === "/users" ? "active-link" : ""}>Users</Link>
        <Link to="/date-project" className={location.pathname === "/date-project" ? "active-link" : ""}>Date Project</Link>
        <Link to="/data-fetch" className={location.pathname === "/data-fetch" ? "active-link" : ""}>Data Fetch</Link>
        <Link to="/data-fetch-react-query" className={location.pathname === "/data-fetch-react-query" ? "active-link" : ""}>Data Fetch with React Query</Link>
      </nav>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/users" component={Users} />
        <Route path="/date-project" component={DateProject} />
        <Route path="/data-fetch" component={DataFetchPage} />
        <Route path="/data-fetch-react-query" component={DataFetchPageWithReactQuery} />
      </Switch>
    </div>
  );
}
