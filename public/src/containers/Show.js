var React = require('react');
var ShowEmailSignup = require('../components/ShowEmailSignup');

var Show = React.createClass({
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-sm-offset-3 col-xs-8 col-xs-offset-2">
            <div className="text-center">
              <h3>Tour coming soon.</h3>
              <p>Sign up now for updates on new music, tour dates, and news.</p>
              <p style={{fontSize: '12'}}>(We will never send spam)</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-sm-offset-4 col-xs-8 col-xs-offset-2">
            <ShowEmailSignup />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Show;
