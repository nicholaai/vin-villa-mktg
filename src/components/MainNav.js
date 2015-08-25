var React = require('react');
var Link = require('react-router').Link;
var ReactRouterBootstrap = require('react-router-bootstrap')
  , NavItemLink = ReactRouterBootstrap.NavItemLink;
import { Navbar, Nav, Row } from 'react-bootstrap';
import '../../stylesheets/components/MainNav.css';

var MainNav = React.createClass({
  getInitialState: function() {
    return {
      brandLogo: 'https://cdn4.iconfinder.com/data/icons/iconset-addictive-flavour/png/social%20media/social_vimeo_V.png'
    }
  },
  render: function() {
    return (
      <Row className="show-grid">
        <Navbar
          brand={<Link to="home"><img src={this.state.brandLogo}></img></Link>}
          toggleNavKey={0}
          className="resetNav">
          <Nav className="navList"  eventKey={0}> {/* This is the eventKey referenced */}
            <NavItemLink to="music" eventKey={1}>Music</NavItemLink>
            <NavItemLink to="video" eventKey={2}>Video</NavItemLink>
            <NavItemLink to="photo" eventKey={3}>Photo</NavItemLink>
            <NavItemLink to="show"  eventKey={4}>Show</NavItemLink>
            <NavItemLink to="about" eventKey={5}>About</NavItemLink>
          </Nav>
        </Navbar>
      </Row>
    );
  }
});

module.exports = MainNav;
