export const REQUEST_JOB_LISTINGS = 'REQUEST_JOB_LISTINGS';
const requestJobListings = () => ({
  type: REQUEST_JOB_LISTINGS,
});

export const RECEIVE_JOB_LISTINGS = 'RECEIVE_JOB_LISTINGS';
const receiveJobListings = (json) => ({
  type: RECEIVE_JOB_LISTINGS,
  jobs: json
})

export const fetchJobs = () => {
  return function(dispatch) {
    dispatch(requestJobListings())

    return fetch('http://localhost:3005/jobs')
      .then(
        response => response.json(),
        error => console.log('An error occured', error)
      )
      .then(
        (json) => dispatch(receiveJobListings(json))
      )
  }
}