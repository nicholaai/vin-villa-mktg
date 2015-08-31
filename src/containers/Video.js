var React = require('react');
var YouTube = require('react-youtube');
var VideoPicker = require('../components/VideoPicker');

var Video = React.createClass({
  getInitialState: function() {
    return {
      videos: [
        {name: 'video', url: 'https://www.youtube.com/watch?v=X6YRfaRvUHo'},
        {name: 'video 2', url: 'https://www.youtube.com/watch?v=jRIqigm2RmU'},
        {name: 'video 3', url: 'https://www.youtube.com/watch?v=lIZKE5MxukE'}
      ],
      currentUrl: 'https://www.youtube.com/watch?v=X6YRfaRvUHo'
    }
  },
  handleSelect: function(url) {
    this.setState({currentUrl: url});
  },
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center">
            <YouTube url={this.state.currentUrl} />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 text-center">
            <VideoPicker videos={this.state.videos} onVideoSelect={this.handleSelect} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Video;
