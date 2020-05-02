import React, { useEffect } from "react";
import { connect } from "react-redux";
import { loadData } from "./app/actions/index";
import JobListings from "./components/JobListings";

function App({ dispatch }) {
  useEffect(() => {
    dispatch(loadData());
  }, []);

  return (
    <div className="App">
      <JobListings />
    </div>
  );
}

const mapStateToProps = (state) => ({ jobs: state.listings });

export default connect(mapStateToProps)(App);
