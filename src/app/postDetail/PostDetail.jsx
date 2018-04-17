/**
 * @overview PostDetail component.  Renders dynamic content from API.
 */

 import React, { Component } from 'react'

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getPost } from '../../actions/posts';

//styled components
import styled from 'styled-components';

 class PostDetail extends Component {
  componentDidMount() {
    const { getPost, match } = this.props;
        getPost(match.params.id);
  }
   render() {
     const { post } = this.props;

     return (
      <PostWrapper backdrop={post.image} alt={post.title} >
      <PostInfo>
        <div>
          <h1>{post.title}</h1>
          <h3>{post.publis_date}</h3>
          <p>{post.content}</p>
        </div>
     </PostInfo>
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