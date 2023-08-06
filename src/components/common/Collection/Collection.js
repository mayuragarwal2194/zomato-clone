import React from 'react';
import './collection.css';
import Slider from 'react-slick';
import NextArrow from '../Carousel/NextArrow';
import PreviousArrow from '../Carousel/PreviousArrow';

export default function Collection({ list }) {
  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3.5,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <div className='container-fluid'>
      <div className='bg-gray py-3'>
        <div className="container collection-container">
          <h2 className='collection-title mb-4'>Collections</h2>
          <div className='d-md-flex justify-content-between position-relative'>
            <div className='collection-subtitle'>
              Explore curated lists of top restaurants, cafes, pubs, and bars in Lucknow, based on trends
            </div>
            <div className="collection-location text-end cursor-pointer position-absolute">
              <span> All collections in Lucknow </span>
              <i className="fa-sharp fa-solid fa-caret-right ms-1 ms-md-2"></i>
            </div>
          </div>
          <Slider {...settings}>
            {list.map((item, index) => {
              return (
                <div className='mt-3' key={index} style={{ width: "18rem" }}>
                  <div className='collection-cover position-relative'>
                    <img src={item.cover} alt={item.title} />
                    <div className='gradient-bg position-absolute w-100 h-100'></div>
                    <div className='text-white px-3'>
                      <h5 className="card-title position-absolute overflow-hidden">{item.title}</h5>
                      <p className="collection-text card-text position-absolute">
                        {item.places}
                        <i className="fa-sharp fa-solid fa-caret-right ms-2"></i>
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
