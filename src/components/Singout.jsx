import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { auth} from '../firebase'

class Signout extends React.Component {

      render() {
      return (
        <>
          <NavLink to="/">
                <button onClick={() => auth.signOut()}>Cerrar sesión</button>
          </NavLink>

        </>
      )
    }
  };
Signout = withRouter(Signout);
  export default Signout;