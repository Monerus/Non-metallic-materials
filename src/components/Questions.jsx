import React from 'react'
import styles from '../styles/Questions.module.scss'
import Button from './Button'
const Questions = () => {
  return (
    <div className={styles.questions}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.text}>
            <h1>Остались вопросы?</h1>
            <h2>Закажите обратный звонок и <br />
            узнайте больше о наших услугах!
            </h2>
            <p>Оставьте заявку и наш менеджер перезвонит <br />
            вам в течении 10 минут
            </p>    
        </div>
            <Button />
        </div>
        <div className={styles.form}>
        <div className={styles.form_content}>
          <input type="text" placeholder='Имя'/>
          <input type="text" placeholder='Телефон'/>
          <input className={styles.input} type="text" placeholder='Комментарии'/>
       <p>Соглашение о персональных данных</p>
       </div>
        </div>
      </div>
    </div>
  )
}

export default Questions