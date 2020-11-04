import React from "react";
import TitleContainer from "../components/home/TitleContainer.js";
import HeaderContainer from "../components/home/HeaderContainer";
import CoursesContainer from "../components/home/CoursesContainer";
import BlogContainer from "../components/home/BlogContainer";
import InstructorsContainer from "../components/home/InstructorsContainer";

class HomePage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Home";
    }
    render() {
      return (
        <React.Fragment>
            <div class="homepage-head-wrapper">
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