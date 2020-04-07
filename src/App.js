import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Header from './components/shared/Header/Header';
import Footer from './components/shared/Footer/Footer';
import Home from './components/Home/Home';
import Posts from './components/Posts/Posts.js';
import About from './components/About/About';
import PostForm from './components/Posts/PostForm';
import PostDetails from './components/Posts/PostDetails';

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* Toaster can be added here */}
        <Header />
        
        <div className='MainSectionMargin'>
          <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/posts" exact component={Posts} />
            <Route path="/posts/new" component={PostForm} />
            <Route path="/posts/:id" component={PostDetails} />
            <Route path="/about" component={About}/>
          </Switch>
        </div>

        <Footer/>
      </div>
    </BrowserRouter> 
  );
}

export default App;
