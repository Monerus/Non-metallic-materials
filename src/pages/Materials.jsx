import React from 'react'
import styles from '../styles/Materials.module.scss';
import { ASPHALT, SAND, RUBBLE } from '../images/material';
import Marerial from './Marerial';
import Questions from '../components/Questions';


const Materials = () => {
  return (
    <section>
      <div className={styles.container}>
        <div className={styles.choice}>
        <h2>Песок</h2>
        <h1>Щебень</h1>
        <h1>Асфальтная крошка</h1>
        </div>
        <div className={styles.content}>
          <Marerial 
      text={'Песок'}
      image={SAND}
      title={'Зернистость песка влияет на водопотребность раствора и его прочностные характеристики – чем больше модуль крупности, тем выше прочность бетона и меньше расход воды для его приготовления.Увеличение зернистости свидетельствует о большем среднем диаметре частиц песка. Это ведет к снижению пластичности цементного раствора. Поэтому зернистость песка должна подбираться в зависимости от назначения и условий, при которых будет эксплуатироваться бетон.'}
      info={'Песок карьерный 1.91'}
      price={'160'}
      />
      <Marerial 
      text={'Щебень'}
      image={RUBBLE}
      title={'Щебень размером 5-20 мм. Это самый востребованный в строительстве и производстве ЖБИ материал, его также применяют для строительства дорог и создания фундамента. Такой щебень незаменим и в частном строительстве при подготовке бетона. Щебень 20-40 мм. Используется в дренажных работах, при строительстве трамвайных и железнодорожных путей, а также может применяться при обустройстве фундаментов зданий промышленного назначения. Щебень размером 40-70 мм может использовать для дренажа, добавляться в бетон и бетонные изделия;'}
      info={'Щебень гранитный фр. 5-20 '}
      price={'500'}
      />
      <Marerial 
      text={'Вторичные материалы'}
      image={ASPHALT}
      info={'Асфальтная крошка'}
      price={'200'}
      />
        </div>
      <Questions />
      </div>
        </section>
      )
    }

export default Materials