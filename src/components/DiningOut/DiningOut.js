import React from 'react';
import './diningOut.css';
import Collection from '../common/Collection/Collection';

// Import of Images
import winner from '../../images/DiningOut-Collection/winner.png'
import newly from '../../images/DiningOut-Collection/newlyOpen.png'
import instaworthy from '../../images/DiningOut-Collection/instaworthy.png'
import mustvisit from '../../images/DiningOut-Collection/mustivisit.png'
import smokyKabab from '../../images/DiningOut-Collection/smokykabab.png'
import bars from '../../images/DiningOut-Collection/bars.png'
import rooftop from '../../images/DiningOut-Collection/rooftop.png'
import bingeworthy from '../../images/DiningOut-Collection/bingeworthy.png'

import Filter from '../common/Filters/Filter';
import { diningOut } from '../../data/diningOutData';
import ExploreSection from '../common/ExploreSection/ExploreSection';


export default function DiningOut() {
  const collectionList = [
    {
      id: 1,
      title: "Winners of Zomato Restaurant Awards",
      cover: winner,
      places: "7 Places"
    },
    {
      id: 2,
      title: "7 Newly Opened Restaurants",
      cover: newly,
      places: "6 Places"
    },
    {
      id: 3,
      title: "8 Best Insta-worthy Places",
      cover: instaworthy,
      places: "8 Places"
    },

    {
      id: 4,
      title: "12 Must-visit Legendary Places",
      cover: mustvisit,
      places: "12 Places"
    },
    {
      id: 5,
      title: "5 Places for Smoky Kebabs",
      cover: smokyKabab,
      places: "5 Places"
    },
    {
      id: 6,
      title: "10 Best Bars & Pubs",
      cover: bars,
      places: "7 Places"
    },
    {
      id: 7,
      title: "8 Serene Rooftop Places",
      cover: rooftop,
      places: "8 Places"
    },
    {
      id: 8,
      title: "8 Places for Bingeworthy Dessertsrd",
      cover: bingeworthy,
      places: "7 Places"
    },
  ];

  const deliveryFilters = [
    // {
    //   id: 1,
    //   title: "Filters",
    //   icon: <i className="fa-solid fa-filter"></i>
    // },
    {
      id: 1,
      title: "Gold",
    },
    {
      id: 2,
      title: "Rating: 4.0+",
    },
    {
      id: 3,
      title: "Outdoor Seating",
    },
    {
      id: 4,
      title: "Serves Alcohol",
    },
    {
      id: 5,
      title: "Open Now",
    }
  ];

  const diningList = diningOut;
  const locality = diningOut?.info?.locality?.name;
  return (
    <div>
      <Collection list={collectionList} />
      <Filter filterList={deliveryFilters} />
      <ExploreSection 
        list={diningList} 
        collectionName='Nightlife Restaurants in Lucknow'
        locality={locality}
      />
    </div>
  )
}
