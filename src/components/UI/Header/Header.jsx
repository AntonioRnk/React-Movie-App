import { Button } from '@mui/material';
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom'
import { searchListMovies } from '../../../redux/actions';
import InputSearch from '../InputSearch/InputSearch'
import styles from './Header.module.scss';

const Header = () => {
  const dispatch = useDispatch();

  return (
     <header className={styles.header}>
      <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                  <Link className={styles.link} onClick={()=>{dispatch(searchListMovies([]))}} to={'/'}>Головна</Link>
                  </li>
                <li className={styles.item}>
                  <Link className={styles.link} to={'/about'}>Про проект</Link>
                </li>
            </ul>
        </nav>
      <InputSearch/>
      <Button className={styles.logIn} variant="outlined">LogIn</Button>
     </header>
  )
}

export default Header