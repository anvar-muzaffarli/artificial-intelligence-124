import React from 'react'
import TrustedCompany from './TrustedCompany'

import partnyor1 from '../assets/images/partnyorlar/Group 400.png'
import partnyor2 from '../assets/images/partnyorlar/Group 401.png'
import partnyor3 from '../assets/images/partnyorlar/Group 402.png'
import partnyor4 from '../assets/images/partnyorlar/Group 403.png'

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

// import teleb olunan modullari daxil et

import { Autoplay } from 'swiper'



const TrustedCompanies = () => {
  return (
    <div className='p-5'>

    <Swiper
    slidesPerView={3}
    spaceBetween={30}

    autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}

      breakpoints={{
        327: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 50,
        },
      }}
      modules={[Autoplay]}
   
    
    className="mySwiper"
  >
    <SwiperSlide><TrustedCompany shirketinLogosu={partnyor1} /></SwiperSlide>
    <SwiperSlide><TrustedCompany shirketinLogosu={partnyor2} /> </SwiperSlide>
    <SwiperSlide><TrustedCompany shirketinLogosu={partnyor3} /> </SwiperSlide>
    <SwiperSlide><TrustedCompany shirketinLogosu={partnyor4} /> </SwiperSlide>
   
  </Swiper>


   
    
    
    
   
    </div>
  )
}

export default TrustedCompanies