/**
 * @overview Posts component. 
 */
import React from 'react';
import { Link } from 'react-router-dom';
//import Styled Components
import styled from 'styled-components';

const Post = ({ post }) => (
    <div className="py-3"> 
    <div className="card">
    <Link to={`/${post.id}`}>
    <div className="card-header">{post.title}</div> <br/>
    </Link>

    <div className="card-body">
    <DateText>{post.publish_date}</DateText>
     <p>{post.description}</p>  <br/>

     </div>
  
    </div>
  
    </div>
)

export default Post;

const DateText = styled.span`
     font-size: 10px;
     color: #999;    
`