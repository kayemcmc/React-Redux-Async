/**
 * @overview PostsList component.  Renders dynamic content from API.
 */
import React, { Component } from 'react';

// Render static HTML:
import __html from './PostList.html';

//Redux
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

//actions
import { getPosts } from '../../actions/posts';

//import component
import Post from '../Post';

class PostList extends Component {
  componentDidMount() {
    const { getPosts  } = this.props;
      getPosts();
  }
  render() {
    const { posts } = this.props;
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
})

const mapDispatchToProps  = dispatch => bindActionCreators({
  getPosts,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(PostList);