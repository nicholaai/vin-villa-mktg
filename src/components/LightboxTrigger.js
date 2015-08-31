var React = require('react');

var LightboxTrigger = React.createClass({
    render: function(){
      this.props.children.props.onClick = this.props.openLightbox;

      for (var j in this.props){
        if (j !== 'children'){
          this.props.children.props[j] = this.props[j];
        }
      }
      return this.props.children;
    }
});

module.exports = LightboxTrigger;
