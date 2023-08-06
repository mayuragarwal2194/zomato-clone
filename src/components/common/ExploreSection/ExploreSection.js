import React from 'react'
import './exploreSection.css';
import ExploreCards from './ExploreCards/ExploreCards';


export default function ExploreSection({ list, collectionName }) {
  return (
    <div className='container'>
      <h2>{collectionName}</h2>
      <div className='explore-cards row row-cols-1 row-cols-md-3 g-md-4'>
          {list.map((restaurant, index) => {
            return <ExploreCards key={index} restaurant={restaurant}/>
          })}
      </div>
    </div>
  )
}
