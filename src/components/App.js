import React from "react";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";

//custom containers
import ListContainer from "../containers/ListContainer";

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
        <Route path="/films" component={ListContainer} />
        <Route path="/people" component={ListContainer} />
        <Route path="/planets" component={ListContainer} />
        <Route path="/species" component={ListContainer} />
        <Route path="/starships" component={ListContainer} />
        <Route path="/vehicles" component={ListContainer} />
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
