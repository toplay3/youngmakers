import React from "react";
import "../../css/blog-page.scss";

class BlogPage extends React.Component {
    componentDidMount() {
      document.title = "YoungMakers Blog";
    }
    render() {
      return (
        <div class="blog-page">
          <iframe src="https://youngmakersnz.blogspot.com/"></iframe>
        </div>
      );
    }
  }
  
export default BlogPage;