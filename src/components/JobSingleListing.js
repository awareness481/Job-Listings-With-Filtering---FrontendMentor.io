import React from "react";
import { SET_FILTERS } from "../app/actions/index";
import { connect } from "react-redux";

const JobSingleListing = ({ job, dispatch }) => {
  const {
    id,
    company,
    logo,
    featured,
    position,
    role,
    level,
    postedAt,
    contract,
    location,
    languages,
  } = { ...job };

  const handleClick = (filter) => {
    dispatch({
      type: SET_FILTERS,
      filter,
    });
  };

  return (
    <div className="job flex flex-row h-64 bg-white shadow-lg my-8 mx-auto items-center">
      <img src={logo} className="ml-16" alt={`${company} company logo`} />
      <div className="job__details flex flex-col justify-center ml-4">
        <h2 className="job__details__title font-bold">{company}</h2>
        <h3 className="job__details__position font-bold">{position}</h3>
        <div className="job__details__info flex flex-row flex-no-wrap justify-between">
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className="job__filters ml-auto mr-16 flex flex-row flex-wrap">
        {languages
          ? languages.map((lang) => (
              <span
                className="job__filters__filter"
                onClick={() => handleClick(lang)}
              >
                {lang}
              </span>
            ))
          : ""}
      </div>
    </div>
  );
};

export default connect()(JobSingleListing);
