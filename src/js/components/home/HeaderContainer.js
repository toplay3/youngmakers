import React from "react";
import "../../../css/home/header-container.scss";
import slider1 from "../../../resources/slider-1.jpg";
import slider2 from "../../../resources/slider-2.jpg";
import slider3 from "../../../resources/slider-3.jpg";
import slider4 from "../../../resources/slider-4.jpg";
import headerDivider from "../../../resources/header-divider.jpg";
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
              src={slider1}
              alt="First slide"
            />
            <Carousel.Caption>
              <p>Painting by art student - Age 12</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider2}
              alt="Second slide"
            />
            <Carousel.Caption>
              <p>Painting by art student - Age 12</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider3}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Painting by art student - Age 12</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={slider4}
              alt="Third slide"
            />
            <Carousel.Caption>
              <p>Painting by art student - Age 12</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <div class="header-title">
          Build fun and interesting projects by learning from
          amazing instructors live online
        </div>
        <img src={headerDivider} class="header-divider"/>
      </div>
    );
  }
}

export default HeaderContainer;
