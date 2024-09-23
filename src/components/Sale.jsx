import React from 'react'
import styles from '../styles/Home.module.scss';
import Button from './Button';
import MAIN from '../images/main-background.png'
const Sale = () => {
  return (
  <section className={styles.sale}>
    <div className={styles.container}>
      {/* <img src={MAIN} alt="" /> */}
    <h1>Продажа и доставка 
    <br/> нерудных материалов
    </h1>
    <p>У нас вы можете заказать материалы премиального качества. <br/>
    Индивидуальный подход и качественная продукция – ключевые преимущества <br/>
    нашей компании.</p>
    <Button />    
    </div>
    </section>
  )
}

export default Sale