var React = require('react');
var PhotoGallery = require('../components/PhotoGallery')
import '../../stylesheets/components/PhotoGallery.css';

var Photo = React.createClass({
  render: function() {
    return (
      <div>
        <PhotoGallery />
      </div>
    );
  }
});

module.exports = Photo;
