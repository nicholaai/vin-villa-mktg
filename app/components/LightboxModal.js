var React = require('react');


var LightboxModal = React.createClass({

  componentDidMount: function(){
    document.addEventListener("keydown", function (e) {
      if ( (this.props.display) && (e.keyCode === 27) ){
        this.props.closeLightbox();
      }
    }.bind(this));
  },

  render: function(){
    for (var j in this.props){
      if (j !== 'children'){
        this.props.children.props[j] = this.props[j];
      }
    }

    if (this.props.display){
      return (
        <div>
          <div className="lightbox-overlay" onClick={this.props.closeLightbox} onTouchStart={this.props.closeLightbox} />
          <div className="lightbox-image">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (<div></div>);
    }
  }
});

module.exports = LightboxModal;
