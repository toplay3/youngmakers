import React from "react";
import "../../../css/home/blog-container.scss";
import { Link } from 'react-router-dom';

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
          <Link class="button" to="/blog">
            View Blog
          </Link>
            
          </div>
        </div>
      </div>
    );
  }
}

export default BlogContainer;
