import React, { Component } from 'react';

class Home extends Component {
  constructor(props) {
    super(props);
  }
  
  render() { 
    return ( 
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            Home Page 
          </div>
        </div>
      </div>
    );
  }
}
 
export default Home;