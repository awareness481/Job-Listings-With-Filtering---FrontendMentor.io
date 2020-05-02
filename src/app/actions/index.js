export const REQUEST_JOB_LISTINGS = "REQUEST_JOB_LISTINGS";
const requestJobListings = () => ({
  type: REQUEST_JOB_LISTINGS,
});

export const RECEIVE_JOB_LISTINGS = "RECEIVE_JOB_LISTINGS";
const receiveJobListings = (data) => ({
  type: RECEIVE_JOB_LISTINGS,
  jobs: data,
});

export const fetchJobs = () => {
  return function (dispatch) {
    dispatch(requestJobListings());

    return fetch("http://localhost:3005/jobs")
      .then(
        (response) => response.json(),
        (error) => console.log("An error occured", error)
      )
      .then((data) => dispatch(receiveJobListings(data)));
  };
};

export const loadData = () => {
  return (dispatch) => Promise.resolve(dispatch(fetchJobs()));
};

export const SET_FILTERS = "SET_FILTERS";
const setFilters = (filter) => ({
  type: SET_FILTERS,
  filter,
});

export const FILTER_JOBS = "FILTER_JOBS";
const filterJobs = (jobs) => ({
  type: FILTER_JOBS,
  jobs,
});
