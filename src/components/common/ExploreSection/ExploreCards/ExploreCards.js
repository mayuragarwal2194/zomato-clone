import React from 'react';
import './exploreCards.css';
import goldOfferImg from '../../../../images/DiningOut-Collection/goldOffer.png';
import altImage from '../../../../images/DiningOut-Collection/altImg.png'

export default function ExploreCards({ restaurant }) {
  const darkGreen = '#267E3E'
  const lightGreen = '#24963F'
  const name = restaurant?.info?.name ?? "";
  const coverImage = restaurant?.info?.image?.url;
  const deliveryTime = restaurant?.order?.deliveryTime;
  const rating = restaurant?.info?.rating?.rating_text;
  const aproxPrice = restaurant?.info?.cfo?.text;
  const cuisines = restaurant?.info?.cuisine?.map(item => item.name).slice(0, 3);
  const bottomContainers = restaurant?.bottomContainers;
  const goldOff = restaurant?.gold?.text;
  const goldOfferValue = restaurant?.gold?.offerValue;
  const locality = restaurant?.info?.locality?.name;

  const offers = restaurant?.bulkOffers ?? [];
  const proOff = offers.length > 1 ? offers[0].text : null;
  const discount =
    offers.length > 1
      ? offers[1].text
      : offers.length === 1
        ? offers[0].text
        : null;
  return (
    <div className="col">
      <div className="card explore-Cards cursor-pointer">
        <div className='card-top position-relative'>
          <div className='exploreCard-img'>
            <img src={coverImage} className="card-img-top" alt="Not Found" />
          </div>
          <div className='offers position-absolute'>
            {proOff && <div className='proOff text-white px-2 rounded-end mb-1'>{proOff}</div>}
            {goldOff &&
              <div className='goldOff d-flex align-items-center justify-content-center'>
                <img src={goldOfferImg} width={"18px"} className='me-2' alt="..." />
                {goldOff} {goldOfferValue}
              </div>
            }
            {discount && <div className='discount text-white px-2 rounded-end'>{discount}</div>}
          </div>
        </div>
        <div className="card-body px-md-0">
          <div className='d-flex justify-content-between'>
            <h5 className="card-title explore-cardTitle mb-0">{name}</h5>
            {rating && <div className='rating text-white px-1 d-flex justify-content-start   align-items-center' style={{ backgroundColor: `${rating > 4 ? darkGreen : lightGreen}` }}>
              {rating} <i className="fa-sharp fa-solid fa-star ms-1"></i>
            </div>}
          </div>
          <div className='d-flex justify-content-between align-items-center mt-2'>
            {cuisines.length && (
              <p className="cuisines card-text mb-0">
                {
                  cuisines.map((item, i) => {
                    return (
                      <span key={i}>
                        {item}
                        {i !== cuisines.length - 1 && ", "}
                      </span>
                    )
                  })
                }
              </p>
            )}
            {aproxPrice && <div className='aprox-price'>{aproxPrice}</div>}
          </div>
          <div>{locality}</div>
          <div className='delivery-time text-end'>{deliveryTime}</div>
        </div>
        {bottomContainers.length > 0 &&
          <div className="card-footer bg-transparent d-flex justify-content-strt align-items-center p-md-0 pt-1">
            <img src={bottomContainers[0]?.image?.url} alt={bottomContainers[0].text} height={"18px"} />
            <div className='res-bottom-text ms-3'>{bottomContainers[0].text}</div>
          </div>
        }
      </div>
    </div>
  )
}
