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
              <li><Link>Music</Link></li>
              <li><Link>Video</Link></li>
              <li><Link>Photo</Link></li>
              <li><Link>Show</Link></li>
              <li><Link>About</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }

});

module.exports = MainNav;
