import React from "react";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink activeClassName="active" exact to="/films">
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/people">
      People
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/planets">
      Planets
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/species">
      Species
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/starships">
      Starships
    </NavLink>{" "}
    <NavLink activeClassName="active" to="/vehicles">
      Vehicles
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route exact path="/" render={() => <h1>Home</h1>} />
        {/* <Route path="/films" component={} />
        <Route path="/people" component={} />
        <Route path="/planets" component={} />
        <Route path="/species" component={} />
        <Route path="/starships" component={} />
        <Route path="/vehicles" component={} /> */}
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>

      <NavLinks />
    </ScrollToTop>
  </Router>
);

export default App;
