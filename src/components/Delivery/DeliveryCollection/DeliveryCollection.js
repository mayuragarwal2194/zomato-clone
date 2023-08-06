import React from 'react';
import './deliveryCollection.css';
import pizza from "../../../images/pizza.png";
import thali from "../../../images/thali.png";
import friedRice from "../../../images/friedRice.png";
import dosa from "../../../images/dosa.png";
import cake from "../../../images/cake.png";
import northIndian from "../../../images/northIndian.png";
import burger from "../../../images/burger.png";
import paratha from "../../../images/paratha.png";
import rolls from "../../../images/rolls.png";
import sandwich from "../../../images/sandwich.png";
import NextArrow from '../../common/Carousel/NextArrow';
import PreviousArrow from '../../common/Carousel/PreviousArrow';
import Slider from 'react-slick';
import DeliveryItem from '../DeliveryItem/DeliveryItem';

export default function DeliveryCollection() {
  const deliveryItems = [
    {
      id: 1,
      title: 'pizza',
      cover: pizza
    },
    {
      id: 2,
      title: 'Thali',
      cover: thali
    },
    {
      id: 3,
      title: 'Fried Rice',
      cover: friedRice
    },
    {
      id: 4,
      title: 'Dosa',
      cover: dosa
    },
    {
      id: 5,
      title: 'Cake',
      cover: cake
    },
    {
      id: 6,
      title: 'North Indian',
      cover: northIndian
    },
    {
      id: 7,
      title: 'Burger',
      cover: burger
    },
    {
      id: 8,
      title: 'Paratha',
      cover: paratha
    },
    {
      id: 9,
      title: 'Rolls',
      cover: rolls
    },
    {
      id: 10,
      title: 'Sandwich',
      cover: sandwich
    },
  ];

  const settings = {
    dots: false,
    infinite: false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1,
          arrows: false
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4.5,
          slidesToScroll: 1,
          arrows: false
        }
      },
    ]
  };
  return (
    <div className='container-fluid'>
      <div className='bg-gray py-5'>
        <div className="container inspiration-container">
          <h2 className='collection-title mb-4'>Inspiration for your first order</h2>
          <Slider {...settings}>
            {deliveryItems.map((item, index) => {
              return <DeliveryItem key={index} item={item} />
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
