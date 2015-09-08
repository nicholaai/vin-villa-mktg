var React = require('react');
var ReactFireMixin = require('reactfire');
var Firebase = require('firebase');
import '../../stylesheets/components/ShowEmailSignup.css';


var ShowEmailSignup = React.createClass({
  mixins: [ReactFireMixin],
  getInitialState: function() {
    return {submitted: false};
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var userEmail = this.refs.email.getDOMNode().value;
    this.firebaseRefs["users"].push({'email': userEmail});
    this.setState({submitted: !this.state.submitted});
  },
  componentWillMount: function() {
    this.bindAsArray(new Firebase('https://vinvilla.firebaseio.com/users'), 'users');
  },
  render: function() {
    var entryField = (
      <input
        type="email"
        className="form-control tour-email placeholder-change"
        ref="email"
        placeholder="Your Email" />
    );
    var thankYou = (<div style={{textAlign: 'center', fontWeight: 'bold'}}>Thank You!</div>);
    var input = this.state.submitted ? thankYou : entryField;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            {input}
            <button type="submit" className="btn btn-default center-block tour-btn">Sign Up</button>
          </div>
        </form>
      </div>
    );
  }
});

module.exports = ShowEmailSignup;
