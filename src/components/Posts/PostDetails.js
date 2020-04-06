import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPostById, deletePost } from '../../services/postService';
import { Link } from 'react-router-dom';

class PostDetails extends Component {

  componentDidMount(){
    // read url parameter in react -- it is available in props
    console.log(this.props.match.params.id);
    // passing the url param to getPostById() method
    this.props.dispatch(getPostById(this.props.match.params.id)); 
  }

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
    
    //this.props.dispatch(createPost( data ));
    this.getTitle.value = '';
    this.getContent.value = '';
  }

  deleteHandler = () => {
    this.props.dispatch(deletePost(this.props.post.id));
  }

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <h1>Post Details</h1>
        { Object.keys(this.props.post).length !== 0? 
          <div>
            <div className="list-group">
              <div className="list-group-item">
                <div className="d-flex w-100 justify-content-between">
                  <h5 className="mb-1">{this.props.post.title}</h5>
                  <small>Post Id: {this.props.post.id}</small>
                </div>
                <p className="mb-1">
                  {this.props.post.body}
                </p>
                <small>UserId: {this.props.post.userId}</small>
                <br />
                <button className='btn btn-primary' data-toggle='modal' data-target='#editModal'>Edit</button> &nbsp;
                <button className='btn btn-danger' onClick={this.deleteHandler}>Delete</button>
              </div>
            </div>

            <div className="modal fade" id="editModal"
              tabIndex={-1}
              role="dialog"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">
                      Update Post
                    </h5>
                    <button
                      type="button"
                      className="close"
                      data-dismiss="modal"
                      aria-label="Close">
                      <span aria-hidden="true">×</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    <form onSubmit={this.handleSubmit}>
                      <input required type="text"
                        placeholder="Enter Post Title"
                        className='form-control' ref={(input) => this.getTitle = input} /><br />
                      <textarea required rows="5" cols="28"
                        placeholder="Enter Post" 
                        className='form-control' ref={(input) => this.getContent = input} /><br />
                      <button className='btn btn-primary' type='submit'>Save Changes</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            </div>
          : 
          <div>
            <div className='alert alert-success'>
              Post has been deleted successfully!
            </div>
            <Link className="nav-link" to="/posts">Goto Posts Page</Link>
          </div>
        }
      </div> 
      
    );
  }
}

const mapStateToProps = (state) => {
  // it is from state.posts 
  // not from state.post because of the way it is mentioned in combined reducer
  return {
      post: state.posts 
  }
}

export default connect(mapStateToProps)(PostDetails);