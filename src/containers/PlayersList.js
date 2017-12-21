import React from 'react'
import { Segment } from 'semantic-ui-react'
import { connect } from  'react-redux'
import * as actions from '../actions/auth_actions'
import { Link } from 'react-router-dom'


class PlayersList extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.renderPlayers()
  }

  render(){
    if(this.props.players){
      return (
        <div>
          {this.props.players.map(player => <Segment key={player.id}><Link to='/chat'><h2>{player.username}</h2></Link><li>player.zipcode</li><li>{player.main_character}</li><li>{player.skill}</li></Segment>)}
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
    players: state.auth.players
  }
}


export default connect(mapStateToProps, actions)(PlayersList)
