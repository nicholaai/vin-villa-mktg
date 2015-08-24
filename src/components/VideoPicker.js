var React = require('react');

var VideoPicker = React.createClass({
  propTypes: {
    videos: React.PropTypes.array.isRequired,
    onVideoSelect: React.PropTypes.func.isRequired
  },
  handleClick: function(url) {
    this.props.onVideoSelect(url);
  },
  render: function() {
    var youTubeThumbnails = this.props.videos.map((video) => {
      return (
        <div>
          <button
            className="btn btn-default"
            onClick={this.handleClick.bind(this, video.url)}>{video.name}</button>
        </div>
      )
    });
    return (
      <div>
        {youTubeThumbnails}
      </div>
    );
  }
});

module.exports = VideoPicker;
