import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { enthusiasm } from './demo';
const rootReducer = combineReducers({
  demo: enthusiasm,
  routing: routerReducer
});

export default rootReducer;