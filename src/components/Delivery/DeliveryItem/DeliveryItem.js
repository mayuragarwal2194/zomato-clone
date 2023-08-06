import React from 'react';
import './deliveryItem.css'
export default function DeliveryItem({ item }) {
  return (
    <div>
      <div className="card deliveryItem-card cursor-pointer bg-transparent border-0 d-flex justify-content-start align-items-center">
        <div className='deliveryItem-img rounded-circle'>
          <img src={item.cover} className="deliveryItem-image rounded-circle card-img-top" alt={item.title} />
        </div>
        <h5 className="card-title deliveryItem-title mt-3">{item.title}</h5>
      </div>

    </div>
  )
}
