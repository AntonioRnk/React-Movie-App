import React, {  useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import MovieListItem from '../../MovieListItem/MovieListItem';
import styles from './Slider.module.scss';

const Slider = ({listItem}) => {

 const [listElement, setListElement] = useState([]);

 useEffect(()=>{
    setListElement(listItem);
 },[listItem])

  return (
    listElement.length && 
    <Swiper
        className={styles.swiper}
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        autoplay ={true}
        breakpoints={{
          600: {
            spaceBetween: 50,
            slidesPerView: 2
          },
          820: {
            slidesPerView: 3
          },
          // desktop >= 991
          1080: {
            slidesPerView: 4
          }
        }}
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