var React = require('react');
var ShowEmailSignup = require('../components/ShowEmailSignup');

var Show = React.createClass({
  render: function() {
    return (
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
          do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
        <ShowEmailSignup />
      </div>

    );
  }
});

module.exports = Show;
