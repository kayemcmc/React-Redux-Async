/**
 * @overview PostsList component.  Renders dynamic content from API.
 */
import React, { Component } from 'react';

// Render static HTML:
import __html from './PostList.html';

//import Styled Components
import styled from 'styled-components';
//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getPosts } from '../../actions/posts';

//import component
import Post from '../Post';

class PostList extends Component {
  componentDidMount() {
    const { getPosts, isLoaded, moviesLoadedAt  } = this.props;
    const oneHour = 60 * 60 * 1000;
      if(!isLoaded || ((new Date()) -   moviesLoadedAt) > oneHour) {
        getPosts();
      }
  }
  render() {
    const { posts, isLoaded } = this.props;
    if(!isLoaded) return <LoadedText>Loading...</LoadedText>
    console.log(posts);
    return (
      <div>
      {posts.map(post => <Post key={post.id} post={post} />)}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts : state.postReducer.posts,
  isLoaded: state.postReducer.postsLoaded,
})

const mapDispatchToProps  = dispatch => bindActionCreators({
  getPosts,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PostList);

const LoadedText = styled.h3`
  color: #48a9c5;
  text-align: center;
  font-size: 20px;
`