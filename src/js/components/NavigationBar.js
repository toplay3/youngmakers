import React from "react";
import "../../css/navigation-bar.scss";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Logo from "./Logo";
import subjects from "../../data/courses";
import { Link } from 'react-router-dom';

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
            <Nav.Link as={Link} to="/" className="link-item">
              Home
            </Nav.Link>
            <NavDropdown
              title="About Us"
              id="collasible-nav-dropdown"
              className="link-item"
            >
              <NavDropdown.Item as={Link} to="/our-school">Our School</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Blog</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Courses"
              id="collasible-nav-dropdown"
              className="link-item"
            >
              {subjects.map((subject, i) => {
                return (
                  <NavDropdown.Item href={subject.url}>
                    {subject.title}
                  </NavDropdown.Item>
                );
              })}
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">
                Instructors
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#pricing" className="link-item">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="nav-location d-none d-lg-block">
          <span>
            130 XXXXXX, Wellington, 6011
            <br />
            Office hours: 1-5pm Weekdays
          </span>
        </Nav>
      </Navbar>
    );
  }
}

export default NavigationBar;
