var React = require('react');
var SoundCloud = require('react-soundcloud-widget');

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
        <div>
          <SoundCloud key={url} id={url} url={url} />
        </div>
      )
    });
    return (
      <div>
        {soundCloudPlayers}
      </div>

    );
  }
});

module.exports = Music;
