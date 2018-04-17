/**
 * @overview Posts component. 
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';


const Post = ({ post }) => (
    <div className="py-3"> 
    <div className="card">
    <Link to={`/${post.id}`}>
    <div className="card-header">{post.title}</div>
    </Link>
    <div className="card-body">
     <p>{post.description}</p>  
     </div>
  
    </div>
  
    </div>
)

export default Post;