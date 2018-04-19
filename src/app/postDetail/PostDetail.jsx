/**
 * @overview PostDetail component.  Renders dynamic content from API.
 */

 import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getPost, resetPost } from '../../actions/posts';


//styled components
import styled from 'styled-components';

//import components
import Comments from '../comments';

 class PostDetail extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;
        getPost(match.params.id);
  }

  componentWillUnmount() {
    this.props.resetPost();
  }
   render() {
     const { post, comments } = this.props;

     return (
      <PostWrapper backdrop={post.image} alt={post.title} >
      <PostInfo>
        <div>
          <h1>{post.title}</h1>
          <h3>{post.publish_date}</h3>
          <p>{post.content}</p>
        </div>
     </PostInfo>
     <Comments comments={comments} postId={ post.id } postPath={ this.props.match.params }  />
    </PostWrapper>
     )
   }
 }

 const mapStateToProps = state => ({
  post : state.postReducer.post,
  isLoaded: state.postReducer.postLoaded,
})

const mapDispatchToProps  = dispatch => bindActionCreators({
  getPost,
  resetPost,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PostDetail);

const PostWrapper = styled.div`
  position: relative;
  padding-top: 50vh;
  background: url(${props => props.backdrop}) no-repeat;
  background-size: cover;
  height: 500px;
`;

const PostInfo = styled.div`
  background: white;
  text-align: left;
  padding: 2rem 10%;
  display: flex;
  > div {
    margin-left: 20px;
  }
  img {
    position: relative;
    top: -5rem;
  }
`;