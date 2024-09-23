import React from 'react'
import { Delivery, Questions, Company, Materials, Chooses, Sale } from '../components/index'

const Home = () => {
  return (
    <>
    <Sale />
    <Chooses />
    <Materials />
    <Company />
    <Questions />
    <Delivery />
    </>
  )
}

export default Home