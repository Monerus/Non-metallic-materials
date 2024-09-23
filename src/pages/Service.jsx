import styles from '../styles/Services.module.scss'
import React from 'react'

const Service = ({text, image, price, title, info}) => {
  return (
    <div className={styles.service}>
        <img src={image}/>
        <div className={styles.text}>
            <h1>{text}</h1>
            <p>{title}</p>
            <div className={styles.price}>
            <div className={styles.price_info}>
            <h1>{info}</h1>
            </div>
            <b>От <span>{price} рублей </span>смена</b>
        </div>
        </div>
    </div>
  )
}

export default Service