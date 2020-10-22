import React from "react";
import "../../css/footer-container.scss";
import Logo from "./Logo";

class FooterContainer extends React.Component {
  render() {
    return (
      <div class="footer-container">
        <div class="footer-sections-container">
          <div class="footer-section about-us">
            <div class="section-container">
              <h3>About us</h3>
              <div class="section-content">
                <div class="list-item">
                  <i class="fas fa-chevron-right"></i>
                  <span>Our School</span>
                </div>
                <div class="list-item">
                  <i class="fas fa-chevron-right"></i>
                  <span>Blog</span>
                </div>
                <div class="list-item">
                  <i class="fas fa-chevron-right"></i>
                  <span>Gallary</span>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-section contact-details">
            <div class="section-container">
              <h3>Contact details</h3>
              <div class="section-content">
                <div class="list-item">
                  <i class="fas fa-map-marker-alt"></i>
                  <span class="list-info-item">
                    130 XXX Wellington, 6011
                    <br /> Office hours 1-5pm weekdays
                  </span>
                </div>
                <div class="list-item">
                  <i class="fas fa-phone-alt"></i>
                  <span class="list-info-item">02040942115</span>
                </div>
                <div class="list-item">
                  <i class="fas fa-envelope"></i>
                  <span class="list-info-item">admin@youngmakers.nz</span>
                </div>
              </div>
            </div>
          </div>
          <div class="footer-section connect-with-us">
            <div class="section-container">
              <h3>Connect with us</h3>
              <div class="section-content">
                <i class="fab fa-facebook"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-weixin"></i>
                <i class="fab fa-tiktok"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="bottom-bar">
          <Logo></Logo>
        </div>
      </div>
    );
  }
}

export default FooterContainer;
