import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";

import ReactDOM from "react-dom";
import React from "react";

import HomePage from "./js/pages/HomePage";
import OurSchoolPage from "./js/pages/OurSchoolPage";

import NavigationBar from "./js/components/NavigationBar.js";
import FooterContainer from "./js/components/FooterContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class ReactRoot extends React.Component {
  render() {
    return (
      <Router>
        <NavigationBar></NavigationBar>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/our-school">
            <OurSchoolPage />
          </Route>
        </Switch>
        <FooterContainer></FooterContainer>
      </Router>
    );
  }
}
const rootElement = document.getElementById("reactRoot");
ReactDOM.render(<ReactRoot />, rootElement);
