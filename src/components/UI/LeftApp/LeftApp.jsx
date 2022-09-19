import React, { useEffect } from 'react'
import { useState } from 'react';
import { getAllRegion } from '../../../API/getAllRegion';
import { getGenreFullList } from '../../../API/getGenreFullList';
import { getPopularPeople } from '../../../API/getPopularMovie';
import { useDispatch, useSelector } from "react-redux/es/exports";
import RangeSlider from '../RangeSlider/RangeSlider';
import SearchSelect from '../SearchSelect/SearchSelect';
import { searchFromActor, searchFromGenre, searchFromRegion, searchIsFound, searchListMovies } from '../../../redux/actions';
import styles from './LeftApp.module.scss';
import { Link } from 'react-router-dom';

const LeftApp = () => {
  const dispatch = useDispatch();
  const [genreList, SetGenreList] = useState([]);
  const [regionList, SetRegionList] = useState([]);
  const [peopleList, SetPeopleList] = useState([]);
  
  useEffect(()=>{
    getGenreFullList().then(rezult=>{
      SetGenreList(rezult);
    })
    getAllRegion().then(rezult=>{
      SetRegionList(rezult);
    })
    getPopularPeople().then(rezult=>{
      SetPeopleList(rezult);
    })
  },[])

  const [listActor] = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.infoActor;
  })

  const [listGenre] = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.infoGenre;
  })

  const [listRegion] = useSelector((state)=>{
    const {searchReducer} = state;
    return searchReducer.infoRegion;
  })

  function handleCleanSearch(){
    dispatch(searchListMovies([]));
    dispatch(searchIsFound(true));
  }

  return (
    <div className={styles.left}>            
    <ul className={styles.list}>
      <li className={styles.item}>
        <Link className={styles.link} onClick={handleCleanSearch} to={'/'}>Головна</Link>
        </li>
      <li className={styles.item}>
        <Link className={styles.link} to={'/about'}>Про проект</Link>
      </li>
    </ul>  
    <h3>Параметри пошуку:</h3>
    <SearchSelect 
       nameList={'Жанр'} 
       selectList={genreList} 
       action={searchFromGenre} 
       value ={'name'} 
       index = {'id'} 
       current = {listGenre}
       />
    <SearchSelect 
       nameList={'Мова оригіналу'} 
       selectList={regionList} 
       action={searchFromRegion} 
       value ={'english_name'} 
       index = {'iso_639_1'} 
       current = {listRegion}
       />
    <SearchSelect 
       nameList={'Актори'} 
       selectList={peopleList} 
       action={searchFromActor} 
       value ={'name'} 
       index = {'id'} 
       current = {listActor}
       />
    <RangeSlider/>
  </div>
  )
}

export default LeftApp