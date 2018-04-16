/**
 * @overview Posts component. 
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';



const Post = ({ post }) => (
    <div className="py-3"> 
    <div className="card">
    <div className="card-header">{post.title}</div>
    <div className="card-body">
     <p>{post.description}</p>  
     </div>
  
    </div>
  
    </div>
)

export default Post;