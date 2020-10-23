import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";

import ReactDOM from "react-dom";
import React from "react";

import NavigationBar from "./js/components/NavigationBar.js";
import TitleContainer from "./js/components/TitleContainer.js";
import HeaderContainer from "./js/components/HeaderContainer";
import CoursesContainer from "./js/components/CoursesContainer";
import BlogContainer from "./js/components/BlogContainer";
import InstructorsContainer from "./js/components/InstructorsContainer";
import FooterContainer from "./js/components/FooterContainer";

class ReactRoot extends React.Component {
  render() {
    return (
      <React.Fragment>
        <NavigationBar></NavigationBar>
        <TitleContainer></TitleContainer>
        <HeaderContainer></HeaderContainer>
        <CoursesContainer></CoursesContainer>
        <BlogContainer></BlogContainer>
        <InstructorsContainer></InstructorsContainer>
        <FooterContainer></FooterContainer>
      </React.Fragment>
    );
  }
}
const rootElement = document.getElementById("reactRoot");
ReactDOM.render(<ReactRoot />, rootElement);
