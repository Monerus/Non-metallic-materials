import React from 'react'
import styles from '../styles/Components.module.scss';
import Material from './Material';
import { ASPHALT, SAND, RUBBLE, TECHNIC } from '../images/material/index'
const Materials = () => {
  return (
    <section className={styles.materials}>
        <h1>Основные материалы</h1>
        <div className={styles.materials_container}>
            <Material 
            text={'Песок'}
            image={SAND}
            />
            <Material 
            text={'Щебень'}
            image={RUBBLE}
            />
            <Material 
            text={'Асфальтная крошка'}
            image={ASPHALT}
            />
            <Material 
            text={'Аренда техники'}
            image={TECHNIC}
            />
        </div>
    </section>
  )
}

export default Materials