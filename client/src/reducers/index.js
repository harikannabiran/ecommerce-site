// reducers/index.js
import { combineReducers } from 'redux';
import cartReducer from './cartReducer';
import {setUser} from './userActions';

const rootReducer = combineReducers({
  cart: cartReducer,
  user: setUser,
});

export default rootReducer;
