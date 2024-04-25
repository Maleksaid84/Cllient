import React, { useEffect, useState } from 'react'
import './NewCollections.css'

import Items from '../Items/Items'

const NewCollections = () => {

      const [new_collection, setNew_collection]= useState ([]);
    

      useEffect (()=> {
        fetch('https://malek.onrender.com/newcollections')

        .then((response)=> response.json())
        .then ((data)=> setNew_collection(data.slice(0, 4)));

        

  }, [])
    

  return (
    <div className='new-collections'>
        <h1>New Collections</h1>
        <hr />
        <div className="Collections">
            {new_collection.map((item,i)=>{
             return <Items  key={i} id={item._id}
              name={item.name} image={item.image}
               new_price={item.new_price} old_price={item.old_price} />
            })}
        </div>
    </div>
  )
}

export default NewCollections