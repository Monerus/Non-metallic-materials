import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import logo from '../images/logo.png'
import styles from '../styles/Header.module.scss';
import Button from './Button';
import BURGER from '../images/burger-bar.png'

const Header = () => {

  const [open, setOpen] = useState(false)

  return (
    <header>
      <div className={styles.burger_menu}
      onClick={() => setOpen(!open)}
      >
        <img src={BURGER} />
        <ul className={styles.answer}>
          
          {
            open && (
              <ul>
                <div className={styles.logo}>
                  <Link to={'/'}>
                  <img src={logo} />
                  </Link>
                  <h1>x</h1>
                </div>
        <li>
      <Link to={'/services'}>Услуги</Link>
      <Link to={'/materials'}>Материалы</Link>
      <Link to={'/'}>Доставка и оплата</Link>
      <Link to={'/'}>О компании</Link>
      <Link to={'/'}>Контакты</Link>
        </li>
        <Button /> 
        <p>Политика конфиденциальности © спец-транс, 2023</p>
        </ul> 
      )}
        </ul>

      </div>
      <div className={styles.header}> 
        <Link to={'/'}>
       <img src={logo} alt="logo"/>
  </Link>
    <ul>
        <li>
      <Link to={'/services'}>Услуги</Link>
      <Link to={'/materials'}>Материалы</Link>
      <Link to={'/'}>Доставка и оплата</Link>
      <Link to={'/'}>О компании</Link>
      <Link to={'/'}>Контакты</Link>
        </li>
    </ul>
    <Button /> 
        </div>    
    </header>
  )
}

export default Header