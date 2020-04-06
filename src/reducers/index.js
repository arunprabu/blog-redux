//Step 4.1: Combining Reducers using Redux's combineReducers
import {combineReducers} from 'redux';

//Step 4.2 loading all reducers
import postReducer from './postReducer'; 

////Step 4.3 combine all reducers into one big object for store
const rootReducers = combineReducers({
  posts: postReducer
});

//Step 4.4 exporing the rootReducer -- that is the combined reducer
export default rootReducers; 