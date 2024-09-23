import React from 'react'
import styles from '../styles/Components.module.scss';
import { Link } from 'react-router-dom'

const Material = ({text, image}) => {
  return (
    <div className={styles.material}>
        <Link to={'/'}>
        <img src={image}/>
        <b>{text}</b>
        </Link>
    </div>
  )
}

export default Material