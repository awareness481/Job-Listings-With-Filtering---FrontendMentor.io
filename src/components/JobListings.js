import React, { useState, useEffect} from "react";
import { connect } from "react-redux";
import Job from "./JobSingleListing";

import { SET_FILTERS, FILTER_JOBS, fetchJobs } from "../app/actions/index";




const JobListings = ({ filters, dispatch, filteredJobs, jobs, setFilters, filterJobs }) => {


  console.log('Job Listings', jobs)
  useEffect(() => {
    if (jobs) {dispatch({
      type: FILTER_JOBS,
      jobs
    })}
  }, [filters])
  

  const mapJobs = (jobs) => {
    if (!jobs) return;
    return jobs.map((job) => (<div><Job job={job} /></div>))
  }

  return (
    <div className='listings w-full pt-16'>
      {
        (filters.length > 0) ? mapJobs(filteredJobs) : mapJobs(jobs)
      }
    </div>
  );
};

const mapStateToProps = (state) => ({
  filters: state.form.filters,
  filteredJobs: state.form.filteredListings,
  jobs: state.listings
});

const mapDispatchToProps = (dispatch) => {
  return {
    setFilters: () => dispatch({type: SET_FILTERS}),
    filterJobs: () => dispatch({type: FILTER_JOBS}),
    dispatch
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(JobListings);
