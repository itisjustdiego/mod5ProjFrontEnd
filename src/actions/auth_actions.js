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
      localStorage.setItem('token', data.token)
      return dispatch({type: 'SIGNUP_USER', payload:{user:data, isLoggedIn:true}})
    })
  }
}

export function loginUser(userData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
     })
      .then(resp => resp.json())
      .then(data => {
        localStorage.setItem('token', data.token);
        return dispatch({ type: 'LOGIN_USER', payload: {user: data, isLoggedIn: true} })
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
