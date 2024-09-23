import React from 'react'
import styles from '../styles/Home.module.scss';
import Choose from './Choose';
import { CLOCK, CIRCLE, ALARM, STARS, PEOPLE } from '../images/icons/index.js'
const Chooses = () => {
  return (
    <div className={styles.chooses}>
      <h1>Почему выбирают нас</h1>
      <div className={styles.wrapper}>
      <Choose 
      text={'Мы работаем с 2000 года'}
      image={CLOCK}
      />
      <Choose 
      text={'Более 5000 счастливых клиентов'}
      image={PEOPLE}
      />
      <Choose 
      text={'Лучшие цены'}
      image={CIRCLE}
      />
      <Choose 
      text={'Качественная продукция'}
      image={STARS}
      />
      <Choose 
      text={'Оперативность'}
      image={ALARM}
      />
      </div>
    </div>
  )
}

export default Chooses