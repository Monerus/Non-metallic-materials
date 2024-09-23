import React from 'react'
import styles from '../styles/Components.module.scss';

const Company = () => {
  return (
    <div className={styles.company}>
        <div className={styles.content}>
        <div className={styles.text}>
            <h1>О компании СПЕЦ-ТРАНС</h1>
            <p>Наша фирма существует уже многие годы, заработав репутацию <br /> 
            на рынке предлагаемых услуг как надежного и ответственного <br /> 
            партнера. В число наших клиентов вошли крупнейшие <br /> 
            организации. При этом стоит отметить, что на индивидуальный<br /> 
            подход при заказе наших услуг могут рассчитывать как крупные <br /> 
            компании, так и частные лица.</p>
        </div>
        <div className={styles.numbers}>
            <div className={styles.number_text}>
                <div className={styles.unit}>
                    <h1>60</h1>     
                    <b>Единиц техники</b>
                </div>
                <div className={styles.careers}>
                <h1>15</h1>
                <b>Карьеров</b>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Company