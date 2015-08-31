var React = require('react');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');

var ShowEmailSignup = React.createClass({
  mixins: [ReactFireMixin],
  handleSubmit: function(e) {
    e.preventDefault();
    var userEmail = this.refs.email.getDOMNode().value;
    this.firebaseRefs["emails"].push(userEmail);
    this.refs.email.getDOMNode().value = '';

  },
  componentWillMount: function() {
    this.bindAsArray(new Firebase('website'), 'emails');
  },
  render: function() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              ref="email"
              placeholder="Your Email" />
            <button type="submit" className="btn btn-default center-block">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = ShowEmailSignup;
