import React from 'react'
import Hero from '../hero/Hero'
import Popular from '../Popular/Popular'
import Offers from '../Offers/Offers'
import NewCollections from '../NewCollections/NewCollections'
import NewsLetter from '../NewsLetter/NewsLetter'
import PopularMan from '../Popular/PopularMan'
import  './css/home.css'





const Shop = () => {
  return (
    <div className='home'>
      <Hero    />
      <Popular />
      <PopularMan/>
      <Offers  />
      <NewCollections/>
      
      <NewsLetter/>
      
      
      
      
    </div>
  )
}

export default Shop