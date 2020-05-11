import React from 'react';
import { SET_FILTERS } from '../app/actions/index';
import { connect } from 'react-redux';

const FormFilters = ({ filters, dispatch }) => {
  const handleToggleFilter = (filter) => {
    dispatch({
      type: SET_FILTERS,
      filter
    })
  }

  return (
    <div className='form-filters flex flex-row w-full h-full items-center'>
      
        
        {filters.map((filter) => 
        <>
          <span className='form-filters__filter py-2 px-4 ml-4'>
            {filter}
          </span>
          <button
              className='toggle-filter p-2'
              onClick={() => handleToggleFilter(filter)}>
                x
          </button>
          </>
        )}
        
      
    </div>
  );
}

const mapStateToProps = (state) => ({
  filters: state.form.filters
});

export default connect(mapStateToProps)(FormFilters);