import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth} from '../firebase'

class Signout extends React.Component {

    getNavLinkClass = (path) => {
      return this.props.location.pathname === path ? 'active' : '';
    }
  
    logOut = () => {
      auth.signOut();
    }
  
    render() {
      return (
        <>
        {/*       <span className={this.getNavLinkClass("/")} onClick={() => this.logOut("/login")}>  */}
              <NavLink to="/">
                <button onClick={() => auth.signOut()}>Cerrar sesión</button>
              </NavLink>
{/*              </span>  */}
        </>
      )
    }
  };
Signout = withRouter(Signout);
  export default Signout;