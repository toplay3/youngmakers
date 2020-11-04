import React from "react";

class BlogPage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Blog";
    }
    render() {
      return (
        <div><br/>Blog page<br/></div>
      );
    }
  }
  
export default BlogPage;