import React from 'react';
import BlogPosts from '../utils/blog-post.js';

function PostLists() {
    return (
      <ul>
        {Object.entries(BlogPosts).map(([slug, { title }]) => (
          <li key={slug}>
            <h3>{title}</h3>
          </li>
        ))}
      </ul>
    );
};

export default PostLists;