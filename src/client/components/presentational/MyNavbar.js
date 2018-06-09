import React from 'react';
import { 
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem
} from "react-bootstrap";
import { NavLink } from 'react-router-dom';


const MyNavBar = () => {
  return (
    <div>
      <Navbar collapseOnSelect fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="/"><img src="https://image.ibb.co/hgV0Rx/conkerX.png" alt="conkerX" className="navbar-brand" /></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavItem eventKey={1} componentClass={NavLink} to="/stories" href="/stories">
              Stories
            </NavItem>
            <NavItem eventKey={2} componentClass={NavLink} to="/resume" href="/resume">
              Resume
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}
  
export default MyNavBar;


/*
import { LinkContainer } from 'react-router-bootstrap';
            <LinkContainer to="/resume">
              <NavItem eventKey={2} componentClass={NavLink} to="/resume" href="/resume">
                Resume
              </NavItem>
            </LinkContainer>
*/