import React from 'react'
import { Segment, Grid, Column } from 'semantic-ui-react'
import { connect } from  'react-redux'
import * as actions from '../actions/auth_actions'
import { Link } from 'react-router-dom'
import Chat from './Chat'
import { Button } from 'semantic-ui-react'


class PlayersList extends React.Component{
  constructor(props){
    super(props)
    this.state= {
      player_id:'',
      username:''
    }
  }

  componentDidMount(){
    this.props.renderPlayers()
    this.props.getCurrentUser()
    // this.props.getMarkerLocation(11249)
  }



  handleClick = (e) => {
    // console.log(e.target.name);
    // console.log(e.target.value);
    this.setState({
      player_id: e.target.value,
      username: e.target.name
    });
  }

  render(){
    // console.log('garbage', this.state.player_id);
    // console.log(this.props.user);
    if(this.state.player_id && this.props.players){
      return (
        <div>
        <Grid columns={2} >
          <Grid.Column>
            <div>
              {this.props.players.map(player =>
                <Segment key={player.id}>
                  <h2>{player.username}</h2>
                  <li>{player.zipcode}</li>
                  <li>{player.main_character}</li>
                  <li>{player.skill}</li>
                  <Button value={player.id} name={player.username} onClick={this.handleClick}>Chat!</Button>
                </Segment>)
              }
            </div>
          </Grid.Column>
          <Grid.Column>
            <Chat receiverUsername={this.state.username} receiver_id={this.state.player_id} sender_id={this.props.user.id} senderUsername={this.props.user.username}/>
          </Grid.Column>
        </Grid>
        </div>
      )
    }
    else if(this.props.players){
      return (
        <div>
        <Grid columns={2} >
          <Grid.Column>
            <div>
              {this.props.players.map(player =>
                <Segment key={player.id}>
                  <h2>{player.username}</h2>
                  <li>{player.zipcode}</li>
                  <li>{player.main_character}</li>
                  <li>{player.skill}</li>
                  <Button value={player.id} onClick={this.handleClick}>Chat!</Button>
                </Segment>)
              }
            </div>
          </Grid.Column>
          <Grid.Column>
          </Grid.Column>
        </Grid>
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
    players: state.auth.players,
    user: state.auth.user,
    geocoded_locations:state.auth.geocoded_locations
  }
}


export default connect(mapStateToProps, actions)(PlayersList)
