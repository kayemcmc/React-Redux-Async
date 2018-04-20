import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { setTextFilter } from '../../actions/filters';


const PostListFilters = (props) => (
  <div>
    <input 
      type="text" 
      placeholder="Search Posts..."
      value={props.filters.text}
      onChange ={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} />
  </div>
)

const mapStateToProps = state => ({
      filters : state.filtersReducer,
    })

export default connect(mapStateToProps)(PostListFilters);

