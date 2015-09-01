var React = require('react');
var YouTube = require('react-youtube');
var VideoPicker = require('../components/VideoPicker');

var Video = React.createClass({
  getInitialState: function() {
    return {
      videos: [
        {code: 'X6YRfaRvUHo', url: 'https://www.youtube.com/watch?v=X6YRfaRvUHo'},
        {code: 'jRIqigm2RmU', url: 'https://www.youtube.com/watch?v=jRIqigm2RmU'},
        {code: 'lIZKE5MxukE', url: 'https://www.youtube.com/watch?v=lIZKE5MxukE'}
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
          <div className="col-sm-8 col-sm-offset-2 ">
            <div className="embed-responsive embed-responsive-16by9">
              <YouTube url={this.state.currentUrl} />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-8 col-sm-offset-2 col-xs-8 col-xs-offset-2">
            <VideoPicker videos={this.state.videos} onVideoSelect={this.handleSelect} />
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Video;
