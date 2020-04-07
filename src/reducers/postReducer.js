import { ADD_POST, GET_POSTS, EDIT_POST, DELETE_POST, GET_POST_BY_ID } from "../actions/types";

//What's a Reducer?
// It is a function that takes the current 
// state and an action that was dispatched as it’s parameters and returns the new state.

// Step2: Setting up postReducer so that
// we can combine this reducer with other reducers later 
// and make a big object for the store 
// reducer should mandatorily return a state. 
const postReducer = (state = [], action) => {
  // Step 4: work with actions 
  // Action will have type and an optional payload 
  switch(action.type) {
    case ADD_POST:
      console.log(action.payload);
      return state.concat([action.payload]); 
    case GET_POSTS: 
      return action.posts;
    case GET_POST_BY_ID: 
      return action.post; 
    case EDIT_POST: 
      return action.post;  
    case DELETE_POST:
      return action.post;
    default:
      return state;
  }
}
export default postReducer;
//step5: We'll fill this later. 
//but, now it is time to understand the concept called 'Actions'
//What are Actions? 
//Actions are plain Javascript objects with a type property. 
//This type property describes the event that is taking place in the application.


//Step6: Let's focus on Combining Reducers into one. Let's create reducers/index.js