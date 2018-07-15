import React from 'react'
import { Link, withSiteData } from 'react-static'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container } from 'reactstrap';
  import window from 'global'


  
  function getColor() {
    window.onscroll = function () {
      "use strict";
      if (document.documentElement.scrollTop > 0 || window.pageYOffset > 0) {
        document.getElementById("nav").classList.add("active")
      }
      else {
        document.getElementById("nav").classList.remove("active")
      }
    }
  }

 export default withSiteData(class Navigation extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  
  render() {


    return (
      <div className="navWrapper">
        <Navbar id="nav" color="light" light fixed="top" expand="lg">
        { getColor() }
          <Container>
            <NavbarBrand href="/"><img className="logo" src="https://s3-us-west-2.amazonaws.com/attorneywebbuilder/clients/template-01/logo.svg" /></NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                <NavItem>
                    <NavLink href="#home" onClick={this.toggle}>Home</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#firm" onClick={this.toggle}>Firm Overview</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#practice" onClick={this.toggle}>Practice Areas</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#staff" onClick={this.toggle}>Staff</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="#contact" onClick={this.toggle}>Contact</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink href="tel:555-765-4321" onClick={this.toggle}>555.765.4321</NavLink>
                </NavItem>
                </Nav>
            </Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
})