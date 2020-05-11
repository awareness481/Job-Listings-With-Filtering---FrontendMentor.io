import React from 'react';



const JobSingleListing = ({job}) => {
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
    languages
  } = {...job};
  
  

  return (
    <div className='job flex flex-row w-4/5 h-64 bg-white shadow-lg my-8 mx-auto items-center'>
      <img src={logo} className='ml-16' alt={`${company} company logo`}/>
      <div className='job__details flex flex-col justify-center ml-4'>
        <h2 className='job__details__title font-bold'>{company}</h2>
        <h3 className='job__details__position font-bold'>{position}</h3>
        <div className='job__details__info flex flex-row flex-no-wrap justify-between'>
          <span>{postedAt}</span>
          <span>{contract}</span>
          <span>{location}</span>
        </div>
      </div>
      <div className='job__filters ml-auto mr-16 flex flex-row flex-wrap'>
        {
         (languages) ? languages.map((lang) => (
            <span className='job__filters__filter'>
              {lang}
            </span>
          )) : ''
        }
      </div>
    </div>
  )
}

export default JobSingleListing;


