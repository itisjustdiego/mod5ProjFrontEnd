import React from 'react'
import { BrowserRouter as Router, Route, withRouter, Redirect } from 'react-router-dom'


const EntryPoint = (props) => {
  return(
    <Router>
      <div>
        <button
          onClick={() => props.history.push('/login')}
        >Login</button>
        <button
          onClick={() => props.history.push('/signup')}
        >Signup</button>
      </div>
    </Router>
  )
}

export default withRouter(EntryPoint)
