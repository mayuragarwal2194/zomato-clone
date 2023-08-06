import React from 'react'
import FilterItem from './FilterItem/FilterItem'
import FilterModal from './FilterItem/FilterModal/FilterModal'

export default function Filter({ filterList }) {
  return (
    <div className='container'>
      <div className='d-flex align-items-center flex-wrap py-3 mt-3'>
        <FilterModal />
        {filterList && filterList.map((filter) => {
          return <FilterItem filter={filter} key={filter.id} />
        })}
      </div>
    </div>
  )
}
