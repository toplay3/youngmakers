import React from "react";
import "../../css/blog-container.scss";

class BlogContainer extends React.Component {
  render() {
    return (
      <div class="blog-container">
        <div class="blog-information">
          <div class="blog-text">
            Please read our blogs for the education principles and philosophies
            which differentiate us from traditional schooling.
          </div>
          <div class="blog-opener-button">
            <div class="btn">View Blog</div>
          </div>
        </div>
      </div>
    );
  }
}

export default BlogContainer;
