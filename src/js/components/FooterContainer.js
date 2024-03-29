import React from "react";
import "../../css/footer-container.scss";
import Logo from "./Logo";
import { Link } from 'react-router-dom';

class FooterContainer extends React.Component {
  render() {
    return (
      <div class="footer-container">
        <div class="footer-sections-container">
          <div class="footer-section about-us">
            <div class="section-container">
              <h3>About us</h3>
              <div class="section-content">
                <Link className="list-item" to="/our-school">
                    <i class="fas fa-chevron-right"></i>
                    <span>Our School</span>
                </Link>
                <Link className="list-item" to="/blog">
                  <i class="fas fa-chevron-right"></i>
                  <span>Blog</span>
                </Link>
                <Link className="list-item" to="/gallery">
                  <i class="fas fa-chevron-right"></i>
                  <span>Gallery</span>
                </Link>
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
                    Office hours 9am - 5pm Everyday
                  </span>
                </div>
                <div class="list-item">
                  <i class="fas fa-phone-alt"></i>
                  <span class="list-info-item">+64 2040942115</span>
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
