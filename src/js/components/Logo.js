import React from "react";
import "../../css/logo.scss";
import logoImage from "../../resources/logo.png";

class Logo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
    };
  }
  render() {
    return (
      <div class="youngmaker-logo">
        <img src={logoImage} />
        <span>&nbsp;&nbsp;</span>
        <span class="logo-text">Young Makers</span>
      </div>
    );
  }
}

export default Logo;
