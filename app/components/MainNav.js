var React = require('react');
var Link = require('react-router').Link;
var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink;
import { Navbar, Nav } from 'react-bootstrap';
import '../../stylesheets/components/MainNav.css';

var MainNav = React.createClass({
  getInitialState: function() {
    return {
      brandLogo: 'img/vinVillaLogo.png',
    }
  },
  render: function() {
    return (
      <Navbar
        brand={
          <Link to="home">
            <img src={this.state.brandLogo} className="my-logo"></img>
          </Link>
        }
        toggleNavKey={0}
        className="header">
        <Nav eventKey={0}>
          <NavItemLink to="music" eventKey={1}>Music</NavItemLink>
          <NavItemLink to="video" eventKey={2}>Video</NavItemLink>
          <NavItemLink to="photo" eventKey={3}>Photo</NavItemLink>
          <NavItemLink to="show"  eventKey={4}>Show</NavItemLink>
          <NavItemLink to="about" eventKey={5}>About</NavItemLink>
        </Nav>
      </Navbar>
    );
  }
});

module.exports = MainNav;
