/**
 * @overview Home page.  Renders static content.
 */
import React from 'react';

// Render static HTML:
import __html from './home.html';

//Import components
import PostList from '../postList';
import PostListFilters from '../postListFilters';

const Home = () => (
    <div>
         <div dangerouslySetInnerHTML={{ __html }} />
        <PostListFilters />
        <PostList />
    </div>
)

export default Home;
