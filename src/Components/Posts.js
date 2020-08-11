import React from 'react';
import { Outlet } from 'react-router-dom';

function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        <Outlet /> {/* render any matching child */}
      </div>
    );
};

export default Posts;

