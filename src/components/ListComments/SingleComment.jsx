import React from 'react'
import styles from './Comments.module.scss';
import moment from 'moment'
import { urlPosterImg } from '../../API/config';

const SingleComment = ({avatar,author,created,content}) => {
  
  const correctDate = moment(created).format('L'); 
  const correctTime = moment(created).format('LTS'); 

  let avatarPath;
  if (avatar && avatar.includes('http')){
      avatarPath = avatar.slice(1);
  }
  else if (avatar && !avatar.includes('http')) {
     avatarPath = urlPosterImg + avatar;
  }
  else {
    avatarPath = 'https://i.pinimg.com/736x/f5/27/41/f52741fb62bf1d821948a49204406bdc.jpg'
  }

  return (
    <div className={styles.commentInner}>
        <div className={styles.author}>
            <img src={avatarPath} alt={styles.avatar} className={styles.avatarImg}/>
            <p className={styles.authorName}>"{author}"</p>
            <p>{correctDate}</p>
            <p>{correctTime}</p>
        </div>
        <div className={styles.content}>
            <p>{content}</p>
        </div>
    </div>
  )
}

export default SingleComment