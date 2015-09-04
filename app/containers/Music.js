var React = require('react');
var SoundCloud = require('react-soundcloud-widget');
import '../../stylesheets/containers/Music.css';

var Music = React.createClass({
  getInitialState: function() {
    return {
      soundCloudUrls: [
        'https://api.soundcloud.com/tracks/190510756',
        'https://api.soundcloud.com/tracks/113708072'
      ],
      soundCloudPlayers: []
    }
  },
  componentDidMount() {
    var soundCloudPlayers = this.state.soundCloudUrls.map((url, i) => {
      return (
        <div key={i} className="soundcloud-player center-block">
          <SoundCloud id={url + i} url={url} />
        </div>
      );
    });
    this.setState({soundCloudPlayers:soundCloudPlayers})
  },
  render: function () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {this.state.soundCloudPlayers}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Music;
