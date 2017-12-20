import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import SignUp from '../containers/SignUp'
import Login from '../containers/Login'
import UserDashboard from '../containers/UserDashboard'
import PlayersList from '../containers/PlayersList'
import EntryPoint from '../containers/Entry'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path='/entrypoint'
            component={EntryPoint}
          />
          <Route exact path='/login'
            component={Login}
          />
          <Route exact path='/signup'
            component={SignUp}
          />
          <Route exact path='/profile'
            component={UserDashboard}
          />
          <Route exact path='/players'
            component={PlayersList}
          />
        </div>
      </Router>
    );
  }
}

export default App;
