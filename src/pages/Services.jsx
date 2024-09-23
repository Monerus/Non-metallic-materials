import React from 'react'
import { CAR, CARTWO } from '../images/material';
import styles from '../styles/Services.module.scss'
import Service from './Service'
import Questions from '../components/Questions';
const Services = () => {
  return (
    <section>
      <Service 
      image={CAR}
      text={'Аренда спецтехники'}
      info={'Трактор 20куб'}
      price={'1500'}
      title={'Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. '}
      />
      <Service 
      image={CARTWO}
      text={'Аренда самосвалов'}
      title={'Мы перелагаем доступные условия аренды различной техники посуточно и на длительный срок. '}
      info={'Самосвал 20куб'}
      price={'1500'}
      />
      <Questions />
    </section>
  )
}

export default Services