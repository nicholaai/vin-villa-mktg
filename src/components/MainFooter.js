var React = require('react');
import '../../stylesheets/components/MainFooter.css';
import { Row, Col } from 'react-bootstrap';

var MainFooter = React.createClass({

  render: function() {
    return (
      <Row className="show-grid">
        <Col sm={12} className="text-center">
          <hr></hr>
          <ul className="footerList">
            <li><a
                  href="https://www.facebook.com/pages/Vin-Villa/161888177250425?fref=ts"
                  target="_blank">F</a></li>
            <li><a
                  href="https://twitter.com/VinnyDukeVilla"
                  target="_blank">T</a></li>
            <li><a
                  href="https://instagram.com/vinnydukevilla"
                  target="_blank">I</a></li>
            <li><a
                  href="https://soundcloud.com/vin-villa"
                  target="_blank">S</a></li>
                <li><a href="#">E</a></li>
          </ul>
        </Col>
      </Row>
    );
  }

});

module.exports = MainFooter;
