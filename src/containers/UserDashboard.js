import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/auth_actions'
import { Segment, Grid, Column } from 'semantic-ui-react'
import { Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import GMap from './GMap'


// import bindActionCreators from 'redux'

class UserDashboard extends React.Component{
  constructor(props){
    super(props)
  }

  componentDidMount(){
    this.props.getCurrentUser()
    this.props.getPlayersLatLng()
  }

  render(){
    if(this.props.user && !!this.props.playersCoordinates ){
      // console.log(this.props.playersCoordinates);
      return (
        <div>
          <Grid columns={2} >
            <Grid.Column>
              <div>
                <h2>{this.props.user.username}</h2>
                <li>Zipcode</li>
                <p>{this.props.user.zipcode}</p>
                <li>Main Character</li>
                <p>{this.props.user.main_character}</p>
                <li>My Skill Level</li>
                <p>{this.props.user.skill}</p>
                <Button><Link to='/players'> See All Players </Link></Button>
              </div>
            </Grid.Column>
            <Grid.Column>
              <div>
                <GMap markers={this.props.playersCoordinates} />
              </div>
            </Grid.Column>
          </Grid>
        </div>
      )
    } else {
      return(
        <div>
          'Loading players Coordinates...'
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {
    user:state.auth.user,
    playersCoordinates: state.auth.playersCoordinates
  }
}



export default connect(mapStateToProps, actions)(UserDashboard)
