import React from 'react'
import styles from '../styles/Home.module.scss';

const Choose = ({text, image}) => {
  return (
    <div className={styles.choose}>
        <div className={styles.block}>
            <img src={image}/>
            <b>{text}</b>
        </div>
    </div>
  )
}

export default Choose