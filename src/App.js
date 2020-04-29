import React from 'react';
import { connect } from 'react-redux';
import { fetchJobs } from './app/actions/index';


function App({dispatch}) {
  dispatch(fetchJobs());
  return (
    <div className='App'>
    </div>
  );
}

const mapStateToProps = (state) => ({listings: state.jobs});

export default connect(mapStateToProps)(App);
