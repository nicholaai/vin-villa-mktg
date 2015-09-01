var React = require('react');
import '../../stylesheets/components/VideoPicker.css';

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
      var videoImage = 'https://img.youtube.com/vi/' + video.code + '/mqdefault.jpg';
      return (
        <div
          className="youtube-thumbnail-holder center-block"
          onClick={this.handleClick.bind(this, video.url)}>
            <img src={videoImage} className="youtube-thumbnail-image" />
        </div>
      );
    });
    return (
      <div>
        {youTubeThumbnails}
      </div>
    );
  }
});

module.exports = VideoPicker;
