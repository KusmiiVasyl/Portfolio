import React from 'react';
import {certificates} from "../data/certificates-data";
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import '../swiper.css';

import {Autoplay, Pagination} from 'swiper';


export const CertificateSlider = () => {
  return (
    <>
      <Swiper pagination={{clickable: true}}
              autoplay={{delay: 2500, disableOnInteraction: false}}
              modules={[Autoplay, Pagination]}
              className='mySwipper'
      >
        {certificates.map((item, index) => {
          const {image, name} = item
          return (
            <SwiperSlide key={index} >
              <div className='flex flex-col lg:flex-row gap-12 lg:gap-32 mb-8 mt-4'>
                <div className='w-58 h-full lg:w-[428px] lg:h-[328px] mb-0'>
                  <img className='rounded-2xl' src={image} alt="Certificate"/>
                </div>
                <div className='flex flex-col max-w-2xl mt-0'>
                  <h5 className='text-cyan-200 font-body text-1xl italic font-normal'>
                    {name}
                  </h5>
                </div>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  );
};

