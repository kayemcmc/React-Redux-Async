import React, { Component } from 'react';
//import css
import './Comments.css';

//components
import Comment from '../comment';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getComments } from '../../actions/comments';

//styled components
import styled from 'styled-components';

class Comments extends Component {
  constructor() {
    super()
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  componentWillMount() {
		this.props.getComment(this.props.postPath.id)
	}
  handleSubmit(e) {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    this.props.addComment(comment)
  }
  render() {
  return (
    <div className="col-md-10 mx-auto">
  
      <div>
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="Comment" name="comment"/>
          <input type="submit" hidden />
        </form>
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


