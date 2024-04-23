import React, { useEffect, useState } from 'react'
import './Popular.css'
import Item from '../Items/Items'

const Popular = () => {

  const [PopularProducts,setPopularProducts] = useState ([]);

  useEffect(()=>{
         fetch('http://localhost:3090/popularinwomen')
         .then((response)=> response.json())
         .then((data)=> setPopularProducts(data));
  },[])

  return (
    <div className='Popular'>
        <h1>Popular in Womens</h1>
        <hr />
        <div className="popular-item">

            {PopularProducts.map((item,i)=>{
             return <Item  key={i} id={item._id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default Popular