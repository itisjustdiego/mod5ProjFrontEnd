import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/auth_actions'
import { Container, Divider, Form, Button } from 'semantic-ui-react'
import { headers } from '../services/adapter'

class Chat extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      content: ""
    }
  }

  componentDidMount(){
    this.props.Messages(this.props.receiver_id, this.props.sender_id)
  }
  

  componentWillReceiveProps(nextProps){
   if(this.props.sender_id != nextProps.sender_id || this.props.receiver_id != nextProps.receiver_id)
   this.props.Messages(nextProps.receiver_id, nextProps.sender_id)
 }

 handleChange = (event) => {
   console.log(event.target.value);
   this.setState({ message: event.target.value })
 }

 handleCreateMessage = (event) => {
   event.preventDefault()
   this.props.createMessage({content:this.state.message, sender_id:this.props.sender_id, receiver_id:this.props.receiver_id})
 }

  render(){
    // debugger
    // console.log(this.props);
    // console.log(this.props);
    // console.log(this.props.player_id);
    if(this.props.user_messages ){
      return (
        <div>
          {this.props.user_messages.map((message) => {
            if(message.sender_id === this.props.sender_id) {
              return(
              <div key={message.id}>
              <Container textAlign='right'>
                <h3>{this.props.senderUsername} says:</h3>  {message.content}
              </Container>

              </div>)
            } else {
              return(
              <div key={message.id}>
              <Container textAlign='left'>
                <h3>{this.props.receiverUsername} says:</h3> <p>{message.content}</p>
              </Container>
              </div>)

            }

          })}
          <Form onSubmit={this.handleCreateMessage}>
            <Form.Input
              name="password"
              value={this.state.message}
              onChange={this.handleChange}
            />
            <Button type="submit">Send</Button>
          </Form>
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
    user_messages: state.auth.user_messages,
    new_message:state.auth.new_message
    // user_received_messages: state.auth.user_received_messages
  }
}

export default connect (mapStateToProps, actions)(Chat)
