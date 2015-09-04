var React = require('react');
import '../../stylesheets/components/MainFooter.css';

var MainFooter = React.createClass({
  getInitialState: function() {
    return {
      websites: ['https://www.facebook.com/pages/Vin-Villa/161888177250425?fref=ts',
                 'https://twitter.com/VinnyDukeVilla',
                 'https://instagram.com/vinnydukevilla',
                 'https://soundcloud.com/vin-villa'],
      email:     'mailto:VinVillaMusic@gmail.com'
    }
  },
  render: function() {
    return (
      <footer className="footer navbar-default">
        <div className="container text-center">
         <ul className="nav navbar-nav footer-list">
           <li><a href={this.state.websites[0]} target="_blank"><i className="fa fa-facebook fa-lg"></i></a></li>
           <li><a href={this.state.websites[1]} target="_blank"><i className="fa fa-twitter fa-lg"></i></a></li>
           <li><a href={this.state.websites[2]} target="_blank"><i className="fa fa-instagram fa-lg"></i></a></li>
           <li><a href={this.state.websites[3]} target="_blank"><i className="fa fa-soundcloud fa-lg"></i></a></li>
           <li><a href={this.state.email}><i className="fa fa-envelope fa-lg"></i></a></li>
         </ul>
        </div>
      </footer>
    );
  }
});

module.exports = MainFooter;
