var React = require('react/addons');
var Lightbox = require('./Lightbox');
var LightboxTrigger = require('./LightboxTrigger');
var LightboxModal = require('./LightboxModal');
import '../../stylesheets/components/PhotoGallery.css';

var PhotoGallery = React.createClass({
  getInitialState: function() {
    return {
      pictures: [
        {thumbnail: 'img/vinThumb1.gif', large: 'img/vin1.gif'},
        {thumbnail: 'img/vinThumb2.gif', large: 'img/vin2.gif'},
        {thumbnail: 'img/vinThumb3.gif', large: 'img/vin3.gif'},
        {thumbnail: 'img/vinThumb4.gif', large: 'img/vin4.gif'}
      ]
    }
  },
  render: function() {
    var lightBoxes = this.state.pictures.map(function (picture, i) {
      return (
        <Lightbox key={i}>
          <LightboxTrigger>
            <img src={picture.thumbnail} className="center-block img-responsive gallery-image"></img>
          </LightboxTrigger>
          <LightboxModal>
            <img src={picture.large} className="img-responsive"></img>
          </LightboxModal>
        </Lightbox>
      );
    })
    return (
      <div className="container">
        <div className="row">
          <div className="col-lg-8 col-lg-offset-2 col-md-10 col-md-offset-1 col-xs-12">
            {lightBoxes}
          </div>
        </div>
      </div>
    );
  }
});

module.exports = PhotoGallery;
