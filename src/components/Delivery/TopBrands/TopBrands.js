import React from 'react';
import './topBrands.css';
import meghana from '../../../images/top-brands/meghanaFoods.png';
import empire from '../../../images/top-brands/empireRest.png';
import mac from '../../../images/top-brands/macDonald.png';
import truffles from '../../../images/top-brands/truffles.png';
import kfc from '../../../images/top-brands/kfc.png';
import burgerKing from '../../../images/top-brands/burgerKing.png';
import freshMenu from '../../../images/top-brands/freshMenu.png'
import a2b from '../../../images/top-brands/a2b.png'
import leon from '../../../images/top-brands/leons.png'
import faasos from '../../../images/top-brands/faasos.png'
import NextArrow from '../../common/Carousel/NextArrow';
import PreviousArrow from '../../common/Carousel/PreviousArrow';
import Slider from 'react-slick';
import DeliveryItem from '../DeliveryItem/DeliveryItem';
import BrandItems from './BrandItems/BrandItems';

export default function TopBrands() {
  const topBrandList = [
    {
      id: 1,
      brandName: 'Meghana Foods',
      time: '35 min',
      cover: meghana
    },
    {
      id: 2,
      brandName: 'Empire Restaurant',
      time: '35 min',
      cover: empire
    },
    {
      id: 3,
      brandName: "McDonald's",
      time: '35 min',
      cover: mac
    },
    {
      id: 4,
      brandName: 'Truffles',
      time: '35 min',
      cover: truffles
    },
    {
      id: 5,
      brandName: 'KFC',
      time: '35 min',
      cover: kfc
    },
    {
      id: 6,
      brandName: 'Burger King',
      time: '35 min',
      cover: burgerKing
    },
    {
      id: 7,
      brandName: 'FreshMenu',
      time: '35 min',
      cover: freshMenu
    },
    {
      id: 8,
      brandName: 'A2B - Adyar Ananda Bhavan',
      time: '35 min',
      cover: a2b
    },
    {
      id: 9,
      brandName: "Leon's Burgers & Wings",
      time: '35 min',
      cover: leon
    },
    {
      id: 10,
      brandName: 'Faasos - Wraps & Rolls',
      time: '35 min',
      cover: faasos
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

  const style = {

  }

  return (
    <div className='container-fluid'>
      <div className='py-5'>
        <div className="container topBrands-container">
          <h2 className='collection-title mb-4'>Top brands for you</h2>
          <Slider {...settings}>
            {topBrandList.map((brand, index) => {
              return <BrandItems key={index} brand={brand} />
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}
