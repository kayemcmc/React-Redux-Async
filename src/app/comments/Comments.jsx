import React, { Component } from 'react';
//import css
import './Comments.css';

//components
import Comment from '../comment';
import AddComment from '../addComment';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getComments } from '../../actions/comments';

//styled components
import styled from 'styled-components';

class Comments extends Component {
 
  componentWillMount() {
		this.props.getComment(this.props.postPath.id)
	}
 
  render() {
  return (
    <div className="col-md-10 mx-auto">
  
      <div>
       <AddComment />
      </div>
      {
        this.props.comments.map(comment => {
          return (
            <Comment
              comment={comment}
              key={comment.id} />
          );
        })
      }

     
    </div>
  );
}
};

const mapStateToProps = state => ({
  comments: state.commentsReducer.comments,

})



const mapDispatchToProps = (dispatch) => {
	return {
		getComment: (id) => dispatch(getComments(id)),
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Comments)


