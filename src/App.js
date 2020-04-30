import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from './app/actions/index';
import JobListings from './components/JobListings';


function App({dispatch}) {
  dispatch(fetchJobs());
  return (
    <div className='App'>
      <JobListings />
    </div>
  );
}

const mapStateToProps = (state) => ({listings: state.jobs});

export default connect(mapStateToProps)(App);
