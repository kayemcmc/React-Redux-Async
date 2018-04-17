import React from 'react';


//components
import Comment from '../comment';

const Comments = props => {
  return (
    <div className="col-md-10 mx-auto">
      {
        props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              key={comment.parent_id} />
          );
        })
      }
    </div>
  );
};

export default Comments;


