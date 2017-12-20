import { combineReducers } from 'redux'
import authReducer from './auth_reducer'
// import testReducer from './test';

export default combineReducers({
  auth: authReducer,
})
