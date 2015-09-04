var React = require('react');
var PhotoGallery = require('../components/PhotoGallery')


var Photo = React.createClass({
  render: function() {
    return (
      <PhotoGallery />
    );
  }
});

module.exports = Photo;
