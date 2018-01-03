export default (state = { isLoggedIn: false, user: {username: null}, error: false }, action) => {
  switch (action.type) {

    case ('SIGNUP_USER'):
      return Object.assign({}, state, {user: action.payload.user, isLoggedIn: true});

    case ('LOGIN_USER'):
      return Object.assign({}, state, {user: action.payload.user, isLoggedIn: true});

    case ('LOGOUT_USER'):
      localStorage.removeItem('token');
      return Object.assign({}, state, {user: {}, isLoggedIn: false});

    case ('CURRENT_USER'):
      return Object.assign({}, state, {user: action.payload.user, isLoggedIn: true});

    case ('FETCH_ALL_PLAYERS'):
      return {...state, players: action.payload}

    case ('FETCH_MESSAGES'):
      return {...state, user_messages:action.payload}
    // case ('FETCH_RECEIVED_MESSAGES'):
    //   return {...state, user_received_messages:action.payload}

    case ('NEW_MESSAGE'):
    console.log(action.payload);
    return {...state, new_message:action.payload}

    case ('GETCOORD'):
      console.log(action.payload);
     let coordinates = action.payload.map((u, index) => ({
         id: index,
         lat: u.lat ,
         lng: u.lng
       }))
       // console.log(coordinates);
      return {...state, playersCoordinates: coordinates}

    default:
      return state;
  }
}
