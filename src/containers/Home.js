var React = require('react');
var Router = require('react-router');
import { Row, Col } from 'react-bootstrap';

var Home = React.createClass({
  render: function() {
    return (
      <Row className="show-grid">
        <Col sm={12}>
          <img
            src="http://cdn.narcity.com/wp-content/uploads/sites/2/2015/01/the-weeknd2.jpg"
            className="img-responsive center-block"></img>
        </Col>
      </Row>
    );
  }
});

module.exports = Home;
