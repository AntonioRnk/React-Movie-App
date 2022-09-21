import { CircularProgress } from '@mui/material';
import React, { useState } from 'react'
import { useEffect } from 'react';
import { getCommentsMovie } from '../../API/getRecomendationMovie';
import SingleComment from './SingleComment';
import styles from './Comments.module.scss';

const Comments = ({movieName, movieId}) => {

  const [listComments, SetListComments] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [show, SetShow] = useState(false);

  useEffect(()=>{
    getCommentsMovie(movieId,SetLoading).then(rezult=>{
        SetListComments(rezult);
    })
  },[movieId])

  function handleMore(){
    SetShow(!show);
  }

  return (
    !loading ?
    <div>
     {!!listComments.length &&
      <div className={styles.inner}>
       <h3>Список відгуків на фільм «{movieName}» :</h3>
        <div className={styles.list}>
        { listComments.length > 3 && !show &&
        <div className={styles.listMore}>
         {listComments.slice(0,3).map(item=>{
          return <SingleComment key = {item.id} avatar={item.author_details.avatar_path} author={item.author} created={item.created_at} content={item.content}/>
        })}
         <button onClick={handleMore}>Показати всі</button>
        </div>}
        { listComments.length > 3 && show &&
        <div className={styles.listMore}>{
        listComments.map(item=>{
           return <SingleComment key = {item.id} avatar={item.author_details.avatar_path} author={item.author} created={item.created_at} content={item.content}/>
        })}
        <button onClick={handleMore}>Сховати</button>
        </div>}
        { listComments.length <= 3 &&
        <div className={styles.listMore}>{
        listComments.map(item=>{
           return <SingleComment key = {item.id} avatar={item.author_details.avatar_path} author={item.author} created={item.created_at} content={item.content}/>
        })}
        </div>}
        </div>
      </div>}
    </div>
    : <CircularProgress className={styles.progress} size ={30}/>
  )
}

export default Comments