import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import Job from "./JobSingleListing";

import { SET_FILTERS, FILTER_JOBS } from "../app/actions/index";




const JobListings = ({ form, jobs, dispatch, setFilters, filterJobs }) => {
  

  console.log(jobs);
  useEffect(() => {
    dispatch({
      type: SET_FILTERS,
      filter: 'HTML'
    })

  }, [])

  useEffect(() => {
    dispatch({
      type: FILTER_JOBS,
      jobs
    })
  }, [jobs])

  // jobs ? filterJobs(jobs) : '';

  return (
    <div className='listings'>
      listings
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.form.filters,
  jobs: state.listings,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: () => dispatch({type: SET_FILTERS}),
    filterJobs: () => dispatch({type: FILTER_JOBS}),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobListings);
