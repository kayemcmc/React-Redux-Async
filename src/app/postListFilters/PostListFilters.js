import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { DateRangePicker } from 'react-dates';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { setTextFilter, setStartDate, setEndDate } from '../../actions/filters';

class PostListFilters extends Component {
  state = {
      startDate: null,
      endDate: null,
      focusedInput: null,
  }
  onDatesChange = ({startDate, endDate})=> {
      this.props.dispatch(setStartDate(startDate));
      this.props.dispatch(setEndDate(endDate));
  }
  
  render() {
    return (
      <div>
        <input 
          className="p-3"
          type="text" 
          placeholder="Search Posts..."
          value={this.props.filters.text}
          onChange ={(e) => {
            this.props.dispatch(setTextFilter(e.target.value));
          }} />
          <DateRangePicker 
          startDateId="startDate"
          endDateId="endDate"
          startDate={this.state.startDate}
          endDate={this.state.endDate}
          onDatesChange={({ startDate, endDate }) => { this.setState({ startDate, endDate })}}
          focusedInput={this.state.focusedInput}
          onFocusChange={(focusedInput) => { this.setState({ focusedInput })}}
          isOutsideRange={() => false}
          />
      </div>
    )
  }
}



const mapStateToProps = state => ({
      filters : state.filtersReducer,
    })

export default connect(mapStateToProps)(PostListFilters);

