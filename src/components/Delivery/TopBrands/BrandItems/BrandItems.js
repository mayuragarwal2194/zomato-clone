import React from 'react';
import './brandItem.css';

export default function BrandItems({brand}) {
  return (
    <div className='brand'>
      <div>
      <div className="card cursor-pointer bg-transparent border-0 d-flex justify-content-start align-items-center">
        <div className='brandItem-img rounded-circle d-flex justify-content-center align-items-center'>
          <img src={brand.cover} className="rounded-circle card-img-top" alt={brand.title} />
        </div>
        <h4 className="card-title brandItem-title mt-3">{brand.brandName}</h4>
        <h5 className='brandTime mt-2'>{brand.time}</h5>
      </div>

    </div>
    </div>
  )
}
