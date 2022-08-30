import React, {  useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import MovieListItem from '../../MovieListItem';


const Slider = ({listItem}) => {

 const [listElement, setListElement] = useState([]);

 useEffect(()=>{
    setListElement(listItem);
 },[listItem])

  return (
    listElement.length && 
    <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay ={true}
        // breakpoints={{
        //   1000: {
        //     width : 1000,
        //     slidesPerView: 4,
        //   },
        //   600: {
        //     width : 600,
        //     slidesPerView: 3,
        //   },
        // }}
        >
       {listElement.map(item=>{
          return item.poster_path && 
                  <SwiperSlide key={item.id}>
                    <MovieListItem path={item.poster_path} title = {item.title} id = {item.id}/> 
                  </SwiperSlide>
        })} 
     </Swiper> 
  )
}

export default Slider