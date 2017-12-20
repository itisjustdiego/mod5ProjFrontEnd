import { backendAPI, headers } from '../services/adapter'

export function signupUser(userData) {
  return (dispatch) => {
    fetch(`${backendAPI}/signup`, {
      method:'POST',
      headers:headers,
      body: JSON.stringify(userData)
    })
    .then(resp => resp.json())
    .then(data => {
      if (!data.error) {
         // console.log('hey')
         localStorage.setItem('token', data.token);
         return dispatch({ type: 'SIGN_UP', payload: {user: data, isLoggedIn: true, error: false} })
       } else {
         return {error: 'Invalid Signup!', status: 401}
       }
     })
  }
}

export function renderPlayers() {
  return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users`)
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_ALL_PLAYERS', payload:data}))
    }
  }

export function loginUser(userData) {
  console.log('loginuser')
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
         console.log('hey')
         localStorage.setItem('token', data.token);
         return dispatch({ type: 'LOGIN_USER', payload: {user: data, isLoggedIn: true, error: false} })
       } else {
         console.log('error')
         return {error: 'Invalid login!', status: 401}
       }
     })
  }
}


export function logoutUser() {
  return { type: 'LOGOUT_USER'}
}

export function getCurrentUser() {
  return (dispatch) => {
    return fetch(`${backendAPI}/current_user`, {
      headers:Object.assign({}, headers, {token: localStorage.getItem('token')})
    })
    .then(resp => resp.json())
    .then(data => dispatch({type: 'CURRENT_USER', payload: {user: data} }))
  }
}
