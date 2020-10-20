import React from "react";
import "../../css/header-container.scss";
import headerImage from "../../resources/header.jpg";
import Carousel from "react-bootstrap/Carousel";

class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <div class="header-container">
        <Carousel
          nextIcon={<i class="fas fa-chevron-circle-right"></i>}
          prevIcon={<i class="fas fa-chevron-circle-left"></i>}
        >
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={headerImage}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={headerImage}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={headerImage}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {/* <div id="header-image" class="header-image-container">
          <div>
            <img class="header-image" src={headerImage} />
          </div>
          <div>
            <img class="header-image" src={headerImage} />
          </div>
          <div>
            <img class="header-image" src={headerImage} />
          </div>
        </div> */}
        <div class="header-title">
          In our beautiful classroom, learn from amazing instructors by building
          fun and interesting projects
        </div>
      </div>
    );
  }
}

export default HeaderContainer;
