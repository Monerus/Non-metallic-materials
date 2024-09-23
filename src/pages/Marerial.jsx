import React from 'react'
import styles from '../styles/Materials.module.scss';

const Marerial = ({text, image, price, title, info}) => {
  return (
    <div className={styles.material}>
        <img src={image}/>
        <div className={styles.text}>
            <h1>{text}</h1>
            <p>{title}</p>
            <div className={styles.price}>
            <div className={styles.price_info}>
            <h1>{info}</h1>
            </div>
            <b>От <span>{price} рублей</span></b>
        </div>
        </div>
    </div>
  )
}

export default Marerial