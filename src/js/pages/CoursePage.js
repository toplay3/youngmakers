import React from "react";

class CoursePage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Course";
    }
    render() {
      return (
        <div><br/>Course page: {this.props.match.params.courseId}<br/></div>
      );
    }
  }
  
export default CoursePage;