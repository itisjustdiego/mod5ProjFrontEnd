import React, { Component } from 'react';
import { BrowserRouter as Router, Route, withRouter } from 'react-router-dom'
import SignUp from '../containers/SignUp'
import Login from '../containers/Login'
import UserDashboard from '../containers/UserDashboard'
import PlayersList from '../containers/PlayersList'
import EntryPoint from '../containers/Entry'
import Chat from '../containers/Chat'

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
          <Route path='/chat'
            component={Chat}
          />
        </div>
      </Router>
    );
  }
}

export default App;


//Monday Chat is finished
//Tuesday agree to play + start map
//Wednesday maps
//Thursday maps
//friday fix minor bugs + tiny features
//
//
//
//
//
//
//
