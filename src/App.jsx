import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Muro from './components/Muro'
import Login from './components/Login'


const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/muro">
          <Muro />
        </Route>
        <Route path="/" exact>
          <Login />
        </Route>
      </Switch>
    </Router>
  )

}

export default App