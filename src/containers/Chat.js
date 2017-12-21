import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/auth_actions'

class Chat extends React.Component {
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getPlayerMessages()
  }

  render(){
    console.log(this.props.user_messages);
    if(this.props.user_messages){
      return (
        <div>
          hi
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

const mapStateToProps = (state) =>{
  return {
    user_messages: state.auth.user_messages
  }
}

export default connect (mapStateToProps, actions)(Chat)
