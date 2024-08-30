import React from 'react'
import Hero from '../components/Hero'
import LatestCollection from '../components/LatestCollection'
import NewsLetter from '../components/NewsLetter'



const Home = () => {
  return (
    <div>
      <Hero/>   
      <LatestCollection/>
      <NewsLetter />
    </div>
  )
}

export default Home
