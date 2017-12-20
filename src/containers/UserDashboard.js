import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/auth_actions'
import { Segment } from 'semantic-ui-react'

// import bindActionCreators from 'redux'

class UserDashboard extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    if(this.props.user){
      return (
        <div>
          <h2>{this.props.user.username}</h2>
          <li>{this.props.user.zipcode}</li>
          <li>{this.props.user.main_character}</li>
          <li>{this.props.user.skill}</li>
        </div>
      )
    } else {
      return(
        <div>
          'Loading...'
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.auth.user
  }
}



export default connect(mapStateToProps, actions)(UserDashboard)
