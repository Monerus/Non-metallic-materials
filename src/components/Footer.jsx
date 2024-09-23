import React from 'react'
import styles from '../styles/Footer.module.scss'
import logo from '../images/logo.png'
import {Link} from 'react-router-dom'
import info from '../images/info.png'

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
      <Link to={'/'}>
        <img src={logo} alt="logo"/>
        </Link>
        <p>Политика конфиденциальности © спец-транс, 2023</p>
        <ul>
          <li>
            <Link to={'/material'}>Материалы</Link>
            <Link to={'/uslugi'}>Услуги</Link>
          </li>
        </ul>
        <div className={styles.contact}>
          <ul>
            <li>
              <Link to={'/'}>
              <img src={info} />
              </Link>
              <Link to={'/'}>
              <img src={info} />
              </Link>
              <Link to={'/'}>
              <img src={info} />
              </Link>
            </li>
          </ul>
          <div className={styles.btn}>
          +7 928 245 15 20
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer