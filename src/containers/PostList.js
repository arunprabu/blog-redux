import React, { Component } from 'react';
import { connect } from 'react-redux';
import Post from '../components/Posts/Post';

import { getAllPosts } from '../services/postService';

class PostList extends Component {
  componentDidMount(){
    // send ajax calls to load all posts..
    // dispatch an action 
    this.props.dispatch(getAllPosts());
  }

  render() {
    let posts = null;
    if(this.props.posts && this.props.posts.length > 0){
      posts = this.props.posts.map((post) =>{
        console.log(post);
        return(
          <Post id={post.id} 
            title={post.title} 
            body={post.body} key={post.id}></Post>
        )
      });
    }

    return (
      <div className='container'>
        <h3>Post List</h3>
        { this.props.posts && this.props.posts.length > 0? 
          posts
          :
          <div className='alert alert-danger'>
            No Posts Found. You can add one!
          </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      posts: state.posts
  }
}

export default connect(mapStateToProps)(PostList);