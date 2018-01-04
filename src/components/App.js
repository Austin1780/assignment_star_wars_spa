import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import img404 from "../404.jpg";

//custom containers
import ListContainer from "../containers/ListContainer";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" className="btn btn-primary" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      exact
      to="/films"
    >
      Films
    </NavLink>{" "}
    <NavLink activeClassName="active" className="btn btn-primary" to="/people">
      People
    </NavLink>{" "}
    <NavLink activeClassName="active" className="btn btn-primary" to="/planets">
      Planets
    </NavLink>{" "}
    <NavLink activeClassName="active" className="btn btn-primary" to="/species">
      Species
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/starships"
    >
      Starships
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/vehicles"
    >
      Vehicles
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>Welcome to SWAPI</h1>
              <iframe
                src="https://brorlandi.github.io/StarWarsIntroCreator/#!/AL21i2y_rQkWr4U735_M"
                width="100%"
                height="800px"
              />
            </div>
          )}
        />
        <Route exact path="/films" component={ListContainer} />
        <Route exact path="/people" component={ListContainer} />
        <Route exact path="/planets" component={ListContainer} />
        <Route exact path="/species" component={ListContainer} />
        <Route exact path="/starships" component={ListContainer} />
        <Route exact path="/vehicles" component={ListContainer} />
        <Route render={() => <img src={img404} />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
