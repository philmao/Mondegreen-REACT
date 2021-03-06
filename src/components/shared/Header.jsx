import React from 'react';
import { Link } from 'react-router-dom';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const renderButtons = () => (
  <Nav className="ml-auto" navbar>
    <NavItem><NavLink tag={Link} to="/account/login">Log In</NavLink></NavItem>
    <NavItem><NavLink tag={Link} to="/account/register">Register</NavLink></NavItem>
  </Nav>);

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props);

    this.logOutClick = this.logOutClick.bind(this);
    this.renderGreeting = this.renderGreeting.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      isOpen: false,
    };
  }

  logOutClick(e) {
    e.preventDefault();
    const { logUserOutFunction } = this.props;
    logUserOutFunction();
  }

  toggleNavbar() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  renderGreeting(name) {
    return (
      <Nav className="ml-auto" navbar>
        <NavItem>
          <span>
            Welcome, {name} | <a href="/logout" onClick={this.logOutClick}>Log Out</a>
          </span>
        </NavItem>
      </Nav>
    );
  }

  render() {
    const { isLoggedIn, firstName } = this.props.authentication;
    return (
      <header className="wrapper">
        <Navbar color="faded" light toggleable>
          <NavbarToggler right onClick={this.toggleNavbar} />
          <NavbarBrand tag={Link} to={`/account/profile/${this.props.authentication.username}`}>Mondegreen</NavbarBrand>
          <Collapse isOpen={this.state.isOpen} navbar>
            {isLoggedIn ? this.renderGreeting(firstName) : renderButtons() }
          </Collapse>
        </Navbar>
      </header>
    );
  }
}
