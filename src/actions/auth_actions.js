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
         localStorage.setItem('token', data.token);
         return dispatch({ type: 'SIGN_UP', payload: {user: data, isLoggedIn: true, error: false} })
       } else {
         return {error: 'Invalid Signup!', status: 401}
       }
     })
  }
}

export function Messages(receiver_id, sender_id) {
  return (dispatch) => {
    fetch(`http://localhost:3001/api/v1/messages?receiver_id=${receiver_id}\&sender_id=${sender_id}`, {
      method:'GET',
      headers:headers
    })
    .then(res => res.json())
    .then(data => dispatch({type: 'FETCH_MESSAGES', payload:data}))
  }
}
// export function receivedMessages(receiver_id, sender_id) {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/api/v1/messages?sender_id=${receiver_id}\&receiver_id=${sender_id}`, {
//       method:'GET',
//       headers:headers
//     })
//     .then(res => res.json())
//     .then(data => dispatch({type: 'FETCH_RECEIVED_MESSAGES', payload:data}))
//   }
// }

export function renderPlayers() {
  return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users`,{
        method:'GET',
        headers:headers
      })
      .then(res => res.json())
      .then(data => dispatch({ type: 'FETCH_ALL_PLAYERS', payload:data}))
    }
  }

export function getPlayersLatLng() {
  return (dispatch) => {
      fetch(`http://localhost:3001/api/v1/users`,{
        method:'GET',
        headers:headers
      })
      .then(res => res.json())
      .then(data => dispatch({ type: 'GETCOORD', payload: data}))
  }
}

// export function createNewMessage() {
//   return (dispatch) => {
//     fetch(`http://localhost:3001/api/v1/messages?receiver_id=${receiver_id}\&sender_id=${sender_id}`, {
//       method:'POST',
//       headers:headers,
//       body: JSON.stringify(userData)
//     })
//     .then(resp => resp.json())
//     .then(data => {
//       if (!data.error) {
//          localStorage.setItem('token', data.token);
//          return dispatch({ type: 'SIGN_UP', payload: {user: data, isLoggedIn: true, error: false} })
//        } else {
//          return {error: 'Invalid Signup!', status: 401}
//        }
//      })
//   }
// }

export function loginUser(userData) {
  return (dispatch) => {
    return fetch(`${backendAPI}/login`, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(userData)
     })
      .then(resp => resp.json())
      .then(data => {
        if (!data.error) {
         // console.log('hey')
         localStorage.setItem('token', data.token);
         return dispatch({ type: 'LOGIN_USER', payload: {user: data, isLoggedIn: true, error: false} })
       } else {
         // console.log('error')
         return {error: 'Invalid login!', status: 401}
       }
     })
  }
}



// export function getMarkerLocation(zipcode) {
//   return (dispatch)=> {
//     fetch(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(zipcode)}+USA&key=AIzaSyCErMfmikbJOzpa8zkL_kOtiTKZ4BizDb0`)
//     .then(res => res.json())
//     .then(data => {
//         if(!data.error) {
//           console.log(data.results[0]);
//             return dispatch({ type: 'RECEIVE_GEOCODE', payload: data.results[0].geometry.location})
//         } else {
//             return {error: `Error fetching geocode for ${zipcode}.`, status: 500}
//         }
//     })
//   }
// }

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
