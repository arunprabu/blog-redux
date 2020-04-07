import axios from 'axios';
import { ADD_POST, GET_POSTS, GET_POST_BY_ID, DELETE_POST, EDIT_POST } from "../actions/types";

const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const createPostSuccess =  (data) => {
  console.log(data);
  return {
    type: ADD_POST,
    payload: {
      id: data.id,
      title: data.title,
      body: data.body
    }
  }
};

export const createPost = (data) => {
  return (dispatch) => {
      return axios.post(POSTS_API_URL, data )
          .then(response => {
              dispatch(createPostSuccess(response.data))
          })
          .catch(error => {
              throw (error);
          });
  };
};

//Initial Load to fetch all posts
export const getAllPosts = () => {
  return (dispatch) => {
    return axios.get(POSTS_API_URL)
      .then(response => {
        //without util method, you can try like the following 
        // this will hit the postReducer
        dispatch({
          type: GET_POSTS,
          posts: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

//Initial Load to get post by id
export const getPostById = (postId) => {
  return (dispatch) => {
    return axios.get(POSTS_API_URL+'/'+postId)
      .then(response => {
        //without util method, you can try like the following
        // this will hit the postReducer
        dispatch({
          type: GET_POST_BY_ID,
          post: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

//Update post
export const editPost = (data) => {
  return (dispatch) => {
      return axios.put(POSTS_API_URL+'/'+data.id, data )
          .then(response => {
            dispatch({
              type: EDIT_POST,
              post: response.data
            })
          })
          .catch(error => {
              throw (error);
          });
  };
};

//Delete Post by postId
export const deletePost = (postId) => {
  return (dispatch) => {
    return axios.delete(POSTS_API_URL+'/'+postId)
      .then(response => {
        //without util method, you can try like the following
        // this will hit the postReducer
        dispatch({
          type: DELETE_POST,
          post: response.data
        })
      })
      .catch(error => {
        throw(error);
      });
  };
};

