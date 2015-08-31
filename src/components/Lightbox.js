var React = require('react');

var Lightbox = React.createClass({

    getInitialState: function(){
      return {
        display: false
      };
    },

    openLightbox: function(){
      this.setState({display: true});
    },

    closeLightbox: function(){
      this.setState({display: false});
    },

    render: function(){
      var childrenWithProps = React.Children.map(this.props.children, function(child, i) {
        var childProps = {
          openLightbox: this.openLightbox,
          closeLightbox: this.closeLightbox,
          display: this.state.display,
          key: child
        };
        return React.cloneElement(child, childProps);
      }, this);
      return (
        <div>
          {childrenWithProps}
        </div>
      );
    }
});

module.exports = Lightbox;
