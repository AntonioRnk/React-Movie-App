import { Alert, Button, Snackbar } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchIsFound, searchListMovies } from '../../../redux/actions';
import InputSearch from '../InputSearch/InputSearch'
import styles from './Header.module.scss';
import stylesLeft from './../LeftApp/LeftApp.module.scss';
import { useState } from 'react';

const Header = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);

  function handleCleanSearch(){
    dispatch(searchListMovies([]));
    dispatch(searchIsFound(true));
  }

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  function handleClassName(event){
    event.target.closest('.app').children[1].firstChild.classList.toggle(stylesLeft.leftActive);
    event.target.closest(`.${styles.menuBtn}`).classList.toggle(styles.menuBtnActive);
  }

  return (
     <header className={styles.header}>
      <nav className={styles.menu}>
          <ul className={styles.list}>
              <li className={styles.item}>
                <button className={styles.menuBtn} onClick={handleClassName}><span></span></button>
              </li>
              <li className={styles.itemMainPage}>
                <Link className={styles.link} onClick={handleCleanSearch} to={'/'}>Головна</Link>
                </li>
              <li className={styles.itemAbout}>
                <Link className={styles.link} to={'/about'}>Про проект</Link>
              </li>
          </ul>
        </nav>
      <InputSearch/>
      <Button className={styles.logIn} onClick={handleClick} variant="outlined">LogIn</Button>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
          Функціонал буде додано в наступному оновлені
        </Alert>
      </Snackbar>
     </header>
  )
}

export default Header