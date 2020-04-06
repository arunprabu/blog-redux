import React from 'react';
import { NavLink } from 'react-router-dom';

const Post = (props) => {
  return (
    <div className="list-group">
      <div className="list-group-item list-group-item-action">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">
            <NavLink to={`/posts/${props.id}`} exact>{ props.title }</NavLink>
          </h5>
          <small>Post Id: {props.id}</small>
        </div>
        <p className="mb-1">
          {props.body}
        </p>
        <small>UserId: #1</small>
      </div>
    </div>
  );
};

export default Post;