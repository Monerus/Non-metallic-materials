import React from 'react' 
import styles from '../styles/Delivery.module.scss'
import ICON from '../images/icon.png'
import MAP from '../images/map.png'

const Delivery = () => {

const info = ['Вы оставляете заявку через сайт или по телефону.', 
    'Мы производим точный расчет стоимости', 
    'Осуществляем поставку заказанного вами материала точно в срок',
    'Соблюдаем своевременный документооборот']

  return (
    <section>
        <div className={styles.container}>
            <div className={styles.first_block}>
            <div className={styles.text}>
            <h1>Доставка</h1>
            <h2>Основная миссия компании Спец-транс — комплексные <br /> 
            поставки нерудных материалов для корпоративных <br /> клиентов и частных лиц. Мы осуществлем доставку по <br />
            Санкт-Петербургу и Ленинградской области.</h2>  
            </div>
            <div className={styles.info}>
                {info.map((value, i) => (
                    <ul key={i}>
                    <img src={ICON}/>
                    <b>{value}</b>
                    </ul>
                ))}
            </div>
            <div className={styles.contact}>
            <div className={styles.city}>
              <h1>г. Санкт-Петербург,</h1>
              <p>Невский проспект, д. 12/2</p>
            </div>
            <div className={styles.city}>
              <h1>+7 812 545 44 53</h1>
              <p>Ежедневно с 08:00 до 24:00</p>
            </div>
            </div>
            </div>
            <div className={styles.second_block}>
                <img src={MAP} alt="map" width={700} />
            </div>
        </div>
    </section>
  )
}

export default Delivery