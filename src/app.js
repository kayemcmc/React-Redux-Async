/**
 * @overview Application entry point.
 */

// Global application styles
import 'src/app.scss';

// React
import React from 'react';
import { render } from 'react-dom';
import { 
  BrowserRouter as Router, 
  Route, 
  Switch,
  Link  } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Our app
import App from './app/App';
import About from './app/about';
import Home from './app/home';
import PostList from './app/postList';
import PostDetail from './app/postDetail';

const test = () => ('test');
const store = createStore(test);

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={App} />
        <Route path='about' component={About}/>
        <Route path='home' component={Home}/>
        <Route path="/:id" component={PostDetail} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
