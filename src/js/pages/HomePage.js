import React from "react";
import TitleContainer from "../components/TitleContainer.js";
import HeaderContainer from "../components/HeaderContainer";
import CoursesContainer from "../components/CoursesContainer";
import BlogContainer from "../components/BlogContainer";
import InstructorsContainer from "../components/InstructorsContainer";

class HomePage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Home";
    }
    render() {
      return (
        <React.Fragment>
            <div class="head-wrapper">
              <TitleContainer></TitleContainer>
              <HeaderContainer></HeaderContainer>
            </div>
            <CoursesContainer></CoursesContainer>
            <BlogContainer></BlogContainer>
            <InstructorsContainer></InstructorsContainer>
        </React.Fragment>
      );
    }
  }
  
export default HomePage;