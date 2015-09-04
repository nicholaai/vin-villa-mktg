var React  = require('react');
var Main   = require('./containers/main');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;
var ReactRouterBootstrap = require('react-router-bootstrap');
var Home   = require('./containers/Home');
var Music  = require('./containers/Music');
var Video  = require('./containers/Video');
var Photo  = require('./containers/Photo');
var Show   = require('./containers/Show');
var About  = require('./containers/About');


module.exports = (
  <Route name="app" path="/" handler={Main}>
    <DefaultRoute name="home" handler={Home} />
    <Route name="music" path="/music" handler={Music} />
    <Route name="video" path="/video" handler={Video} />
    <Route name="photo" path="/photo" handler={Photo} />
    <Route name="show"  path="/show"  handler={Show}  />
    <Route name="about" path="/about" handler={About} />
  </Route>
);
