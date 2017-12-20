import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { signupUser } from '../actions/auth_actions'

import { Form, Button } from 'semantic-ui-react';

class SignUp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username:'',
      password:'',
      zipcode:'',
      main_character:'',
      skill:''
    }
  }

  handleSignUp = (event) => {
    event.preventDefault()
    this.props.signupUser({user: this.state})
  }

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  render(){
    return (
      <div>
      {!this.props.auth.isLoggedIn ?(
       <div>
           <h2>SignUp</h2>
           <Form size="mini" onSubmit={this.handleSignUp}>
             <Form.Group>
               <Form.Input required
                 name="username"
                 value={this.state.username}
                 placeholder="Enter Username"
                 onChange={this.handleChange}
               />
             </Form.Group>
             <Form.Group>
               <Form.Input
                 name="password"
                 type="password"
                 value={this.state.password}
                 placeholder="Enter Password"
                 onChange={this.handleChange}
               />
             </Form.Group>
             <Form.Group>
               <Form.Input
                 name="zipcode"
                 type="zipcode"
                 value={this.state.zipcode}
                 placeholder="Enter zipcode"
                 onChange={this.handleChange}
               />
             </Form.Group>
             <Form.Group>
               <Form.Input
                 name="main_character"
                 type="main_character"
                 value={this.state.main_character}
                 placeholder="Enter Main Character"
                 onChange={this.handleChange}
               />
             </Form.Group>
             <Form.Group>
               <Form.Input
                 name="skill"
                 type="skill"
                 value={this.state.skill}
                 placeholder="Enter Skill"
                 onChange={this.handleChange}
               />
             </Form.Group>
             <Form.Group>
             <Button type='submit'>Sign Up</Button>
             </Form.Group>
           </Form>
         </div>)
         :
          (<Redirect to='/profile' />)
        }
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth:state.auth,
  }
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    signupUser:signupUser,
  }, dispatch)
}


export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
