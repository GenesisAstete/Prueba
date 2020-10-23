import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth} from '../firebase'
import logo from '../img/logo.png'
import '../style/navbar.css';


class Navbar extends React.Component {

  getNavLinkClass = (path) => {
    return this.props.location.pathname === path ? 'active' : '';
  }

  logOut = () => {
    auth.signOut();
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <img src={logo} className="Logo-Header" alt="logo" />
        <p>Company</p>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">

            <li className={this.getNavLinkClass("/home")}style={{borderColor: '#009ad8',color: '#009ad8'}}><NavLink to="/home" >Home</NavLink></li>
            <li className={this.getNavLinkClass("/home")}><NavLink to="/home">News</NavLink></li>
            <li className={this.getNavLinkClass("/home")}><NavLink to="/home">Live cameras</NavLink></li>
            <li className={this.getNavLinkClass("/home")}><NavLink to="/home">Photos</NavLink></li>
            <li className={this.getNavLinkClass("/home")}><NavLink to="/home">Contact</NavLink></li>
            <li className={this.getNavLinkClass("/home")} onClick={() => this.logOut("/")}>
              <NavLink to="/">Logout</NavLink></li>
          </ul>
        </div>
      </nav>
    )
  }
};
Navbar = withRouter(Navbar);
export default Navbar;

