var React = require('react');
var Lightbox = require('react-lightbox');

var PhotoGallery = React.createClass({
  getInitialState: function() {
    return {
      pictures: [
        'http://cdn.pitchfork.com/tracks/14505/homepage_large.c6c55cb2.jpg',
        'http://www.billboard.com/files/styles/promo_650/public/media/drake_press-2013-650a.jpg',
        'http://assets.vg247.com/current//2015/02/kanye-west.jpg',
        'http://c.directlyrics.com/img/upload/lana-del-rey-big-eyes.jpg'
      ]
    }
  },
  render: function() {
    return (
      <div>
        <div className="box">
          <Lightbox pictures={this.state.pictures} />
        </div>
      </div>
    );
  }
});

module.exports = PhotoGallery;
