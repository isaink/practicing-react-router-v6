import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

import Home from './Components/Home.js';
import About from './Components/About.js';
import Post from './Components/Post.js';
import Posts from './Components/Posts.js';
import PostLists from './Components/PostLists.js';

function App() {
  return (
    <Router>                        
      {/* To avoid the refreshing of the web pages, as a React library create a NAV */}
      {/*  Can only be one Router and All routes are nested inside it */}

      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
       
        <Link to="/about" style={{ padding: 5 }}>
         About
        </Link>
        
        <Link to='/posts' style={{ padding: 5 }}> Posts</Link>
      </nav>
      {/* Rest of the code remains same */}
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />   
         
        <Route path="posts" element={<Posts />} >  {/*  Nested routes */}
          <Route path="/" element={<PostLists />} />
          <Route path=":slug" element={<Post />} />  {/*  this is a dynamic route */}
        </Route>
      </Routes>

    </Router>
  );
}




export default App;
