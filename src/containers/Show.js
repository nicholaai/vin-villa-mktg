var React = require('react');
var ShowEmailSignup = require('../components/ShowEmailSignup');

var Show = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
            <ShowEmailSignup />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Show;
