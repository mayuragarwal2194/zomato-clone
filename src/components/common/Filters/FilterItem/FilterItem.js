import React from 'react'
import './filterItem.css'

export default function FilterItem({filter}) {
  return (
    <div className='filter-item mb-3 mb-md-0 d-flex align-items-center me-3 border cursor-pointer px-2 py-2'>
      {filter.icon && 
        <div className='me-2'> {filter.icon} </div>
      }
      <div>{filter.title}</div>
    </div>
  )
}
