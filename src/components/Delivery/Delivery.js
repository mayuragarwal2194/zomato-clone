import React from 'react';
import './delivery.css';
import Filter from '../common/Filters/Filter';
import DeliveryCollection from './DeliveryCollection/DeliveryCollection';
import TopBrands from './TopBrands/TopBrands';
import ExploreSection from '../common/ExploreSection/ExploreSection';
import { restaurents } from '../../data/restaurents';

export default function Delivery() {
  const deliveryFilters = [
    // {
    //   id: 1,
    //   title: "Filters",
    //   icon: <i className="fa-solid fa-filter"></i>
    // },
    {
      id: 1,
      title: "Rating: 4.0+",
    },
    {
      id: 2,
      title: "Safe and Hygienic",
    },
    {
      id: 3,
      title: "Pure Veg",
    },
    {
      id: 4,
      title: "Delivery Time",
      icon: <i className="fa-solid fa-arrow-right-arrow-left fa-rotate-90"></i>
    },
    {
      id: 5,
      title: "Great Offers",
    }
  ]
  const restaurentList = restaurents;
  return (
    <div>
      <Filter filterList={deliveryFilters} />
      <DeliveryCollection />
      <TopBrands />
      <ExploreSection 
        list={restaurentList} 
        collectionName='Delivery Restaurants in Lucknow
      '/>
    </div>
  )
}
