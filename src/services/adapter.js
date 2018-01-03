export const backendAPI = 'http://localhost:3001/api/v1'

export const headers = {
  'Content-Type': 'application/json',
  'Accept': 'application/json',
  'Authorization': `Token ${localStorage.getItem('token')}`
}
