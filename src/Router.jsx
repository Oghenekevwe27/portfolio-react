import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Homepage from "./pages/Homepage";
import Projectpage from "./pages/Projectpage";
const Routescomp = () => {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Homepage />
          </Route>
          <Route path="/project">
            <Projectpage />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <Error />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default Routescomp;
