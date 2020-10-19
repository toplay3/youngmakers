import React from "react";
import "../../css/header-container.scss";
import headerImage from "../../resources/header.jpg";
import Carousel from "react-bootstrap/Carousel";

class HeaderContainer extends React.Component {
  render() {
    return (
      <div class="header-container">
        <div id="header-image" class="header-image-container">
          <div>
            <img class="header-image" src={headerImage} />
          </div>
          <div>
            <img class="header-image" src={headerImage} />
          </div>
          <div>
            <img class="header-image" src={headerImage} />
          </div>
        </div>
        <div class="header-title">
          In our beautiful classroom, learn from amazing instructors by building
          fun and interesting projects
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
