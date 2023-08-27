import React from 'react'
import Welcome from '../components/Welcome/Welcome'
import Image from '../components/Home_1st_Image/Image'
import Banner from '../components/Framer'
import ExchangeCard from '../components/Exchange Plus/Exchange_card'
import How from '../components/How_it_work/How'

const Home = () => {
  return (
    <div>
      <Welcome/>
      <Image/>
      <Banner/>
      <ExchangeCard/>
      <How/>
    </div>
  )
}

export default Home