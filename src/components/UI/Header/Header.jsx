import React from 'react'
import { Link } from 'react-router-dom'
import InputSearch from '../InputSearch/InputSearch'
import styles from './Header.module.scss';

const Header = () => {
  
  return (
     <header className={styles.header}>
      <nav className={styles.menu}>
            <ul className={styles.list}>
                <li className={styles.item}>
                  <Link className={styles.link} to={'/'}>Головна</Link>
                  </li>
                <li className={styles.item}>
                  <Link className={styles.link} to={'/about'}>Про проект</Link>
                </li>
            </ul>
        </nav>
      <InputSearch/>
      <div className={styles.account}>
        <p>Увійти:</p>
        <button className={styles.logIn}></button>
      </div>
     </header>
  )
}

export default Header