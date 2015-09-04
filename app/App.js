var React = require('react');
var routes = require('./routes');
var Router = require('react-router');

Router.run(routes, function(Root) {
  React.render(<Root />, document.getElementById('app'));
});
