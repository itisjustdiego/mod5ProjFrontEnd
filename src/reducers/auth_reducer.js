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

    default:
      return state;
  }
}
