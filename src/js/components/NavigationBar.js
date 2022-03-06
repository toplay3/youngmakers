import React from "react";
import "../../css/navigation-bar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import subjects from "../../data/courses";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import scrollToSection from "../helpers/scrollToSection";

class NavigationBar extends React.Component {
  render() {
    return (
      <Navbar fixed="top" expand="lg" bg="dark" variant="dark" collapseOnSelect>
        <Navbar.Brand>
          <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="nav-links-collapse"
          id="responsive-navbar-nav"
        >
          <Nav className="nav-links">
            <Nav.Link eventKey="1" as={Link} to="/" className="link-item">
              Home
            </Nav.Link>
            <NavDropdown
              title="About Us"
              id="collasible-nav-dropdown"
              className="link-item"
            >
              <NavDropdown.Item eventKey="2" as={Link} to="/our-school">Our School</NavDropdown.Item>
              <NavDropdown.Item eventKey="3" as={Link} to="/gallery">Gallery</NavDropdown.Item>
              <NavDropdown.Item eventKey="4" as={Link} to="/blog">Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Courses"
              id="collasible-nav-dropdown"
              className="link-item"
            >
              {subjects.map((subject, i) => {
                return (
                  <NavDropdown.Item eventKey={7 + i} as={Link} to={"/course/" + subject.slug}>
                    {subject.title}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item eventKey="5" as={HashLink} to="/#instructors" scroll={(el) => scrollToSection(el)}>
                Instructors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} eventKey="6" to="/contact" className="link-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="nav-location d-none d-lg-block">
          <span>
            +64 2040942115
            <br />
            Office hours: 9am-5pm Everyday
          </span>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
