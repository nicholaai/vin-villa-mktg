var React = require('react');
var SoundCloud = require('../components/SoundCloud');

var Music = React.createClass({
  getInitialState: function() {
    return {
      songs: [
        {url: 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/190510756'},
        {url: 'https://w.soundcloud.com/player/?url=https://api.soundcloud.com/tracks/113708072'}
      ]
    }
  },
  render: function () {
    var soundCloudPlayers = this.state.songs.map((song, i) => {
      return (
        <div key={song + i} className="col-md-8 col-md-offset-2">
          <SoundCloud url={song.url} />
        </div>
      );
    });
    return (
      <div>
        <div className="container">
          <div className="row">
            {soundCloudPlayers}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = Music;
