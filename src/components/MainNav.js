var React = require('react');
var Link = require('react-router').Link;
import '../../stylesheets/components/MainNav.css';

var MainNav = React.createClass({

  render: function() {
    return (
      <div className="container">
        <nav className="navbar navbar-default" role="navigation">
          <div className="col-sm-12 text-center" style={{marginTop: 15}}>
            <ul className="testing">
              <li><Link to="music">Music</Link></li>
              <li><Link to="video">Video</Link></li>
              <li><Link to="photo">Photo</Link></li>
              <li><Link to="show">Show</Link></li>
              <li><Link to="about">About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

});

module.exports = MainNav;
