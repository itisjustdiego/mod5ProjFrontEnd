import React from 'react'
import { Segment } from 'semantic-ui-react'

class PlayersList extends React.Component{
  constructor(){
    super()
    this.state = {
      players: []
    }
  }

  componentDidMount(){
    fetch(`http://localhost:3001/api/v1/users`)
    .then(res => res.json())
    .then(data => this.setState({
      players:data
    }))
  }

  render(){
    console.log(this.state.players);
    return(
      <div>
        {this.state.players.map(player => <Segment><h2>{player.username}</h2><li>{player.zipcode}</li><li>{player.main_character}</li><li>{player.skill}</li></Segment>)}
      </div>
    )
  }

}


export default PlayersList
