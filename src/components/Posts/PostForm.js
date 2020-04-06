import React, { Component } from 'react';
// Step 7: use the connect function from react-redux to connect this form comp with 
import { connect } from 'react-redux';

import { createPost } from '../../services/postService';

// Step 6: Work on form submission using refs
class PostForm extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
    const title = this.getTitle.value;
    const body = this.getContent.value;
    const data = {
      id: new Date(),
      title,
      body
    }
    console.log(data);
    console.log(this.props);

    this.props.dispatch(createPost( data ));
    this.getTitle.value = '';
    this.getContent.value = '';
  }

  render() {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <h3>Create Post!</h3>
            <form onSubmit={this.handleSubmit}>
              <input required type="text"
                placeholder="Enter Post Title"
                className='form-control' ref={(input) => this.getTitle = input} /><br />
              <textarea required rows="5" cols="28"
                placeholder="Enter Post"
                className='form-control' ref={(input) => this.getContent = input} /><br />
              <button className='btn btn-primary' type='submit'>Post</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(PostForm);