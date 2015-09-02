var React = require('react');
var SoundCloud = require('react-soundcloud-widget');
import '../../stylesheets/containers/Music.css';

var Music = React.createClass({
  getInitialState: function() {
    return {
      soundCloudUrls: [
        'https://soundcloud.com/vin-villa/recognize',
        'https://soundcloud.com/lnsent/what-we-do'
      ]
    }
  },
  render: function () {
    var soundCloudPlayers = this.state.soundCloudUrls.map((url) => {
      return (
        <div className="soundcloud-player center-block">
          <SoundCloud key={url} id={url} url={url} />
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              {soundCloudPlayers}
            </div>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Music;
