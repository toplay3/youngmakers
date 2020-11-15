import "bootstrap/dist/css/bootstrap.min.css";
import "./css/style.scss";

import ReactDOM from "react-dom";
import React, { Suspense } from "react";

const HomePage = React.lazy(() => import("./js/pages/HomePage"));
const OurSchoolPage = React.lazy(() => import("./js/pages/OurSchoolPage"));
const InstructorsPage = React.lazy(() => import("./js/pages/InstructorsPage"));
const GalleryPage = React.lazy(() => import("./js/pages/GalleryPage"));
const CoursePage = React.lazy(() => import("./js/pages/CoursePage"));
const ContactPage = React.lazy(() => import("./js/pages/ContactPage"));
const BlogPage = React.lazy(() => import("./js/pages/BlogPage"));
const BlogEntryPage = React.lazy(() => import("./js/pages/BlogEntryPage"));

import NavigationBar from "./js/components/NavigationBar.js";
import FooterContainer from "./js/components/FooterContainer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  withRouter
} from "react-router-dom";

class _ScrollToTop extends React.Component {
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.scrollTo(0, 0)
    }
  }

  render() {
    return this.props.children
  }
}

const ScrollToTop = withRouter(_ScrollToTop);

class ReactRoot extends React.Component {
  render() {
    return (
      <Router>
        <ScrollToTop>
          <NavigationBar></NavigationBar>
          <div class="page-container">
            <Suspense fallback={<div class="loading-placeholder">Loading...</div>}>
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route path="/our-school" component={OurSchoolPage}/>
                <Route path="/instructors" component={InstructorsPage}/>
                <Route path="/gallery" component={GalleryPage}/>
                <Route path="/course/:courseId" component={CoursePage}/>
                <Route path="/contact" component={ContactPage}/>
                <Route path="/blog" component={BlogPage}/>
                <Route path="/blog-entry/:blogEntryId" component={BlogEntryPage}/>
              </Switch>
            </Suspense>
          </div>
          <FooterContainer></FooterContainer>
        </ScrollToTop>
      </Router>
    );
  }
}
const rootElement = document.getElementById("reactRoot");
ReactDOM.render(<ReactRoot />, rootElement);
