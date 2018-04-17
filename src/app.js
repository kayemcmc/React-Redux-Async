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
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { save, load } from 'redux-localstorage-simple';

// Our app
import App from './app/App';
import About from './app/about';
import Home from './app/home';
import PostList from './app/postList';
import PostDetail from './app/postDetail';

//Reducer
import rootReducer from './reducers';

const middleware = [logger, thunk];
const store = createStore(
  rootReducer,
  load(),
  composeWithDevTools(applyMiddleware(...middleware, save())),
);

render((
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About}/>
        <Route path='/home' component={Home}/>
        <Route path="/:id" component={PostDetail} />
      </Switch>
    </Router>
  </Provider>
), document.getElementById('root'));
