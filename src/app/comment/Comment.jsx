/**
 * @overview Comment component. 
 */
import React from 'react';


const Comment = ({ comment }) => {
    return (
      <div className="card my-4">
        <div className="card-footer">
            <img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png" className="comment-author-img" style={{width: '40px'}} />
          &nbsp;
         <p>
            {comment.user}
          </p>
          <span className="date-posted">
            {comment.date}
          </span>
         
        </div>
        <div>
        <p className="card-text pl-3">{comment.content}</p>
      </div>
      </div>
    );
  };

export default Comment;