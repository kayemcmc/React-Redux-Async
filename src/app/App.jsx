/**
 * @overview Our main app layout.
 */
import React from 'react';
import PropTypes from 'prop-types';


const App = ({ children }) => (
  <div>
    <div className='mx-3'>  
      {children}
    </div>
  </div>
);

App.propTypes = {
  children: PropTypes.node,
};

export default App;
