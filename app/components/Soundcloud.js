var React = require('react');
import '../../stylesheets/components/SoundCloud.css';

var SoundCloud = React.createClass({
  propTypes: {
    url: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <iframe
        width="100%"
        id={this.props.url}
        height="166"
        scrolling="no"
        className="soundcloud-player center-block"
        frameBorder="no"
        src={this.props.url}>
      </iframe>
    );
  }
});

module.exports = SoundCloud;
