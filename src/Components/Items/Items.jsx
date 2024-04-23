import React from 'react'
import './Items.css'
import { Link } from 'react-router-dom'

const Items = (props) => {
  console.log(props)
  return (
<div className='Items'>

<Link to={`/product/${props.id}`}>
  <img onClick={window.scrollTo(0,0)} src={props.image} alt="" />
</Link>
          <p>  {props.name} </p>

   <div className='Items-prices'>
    <div className="item-price-new"> DT {props.new_price} </div>
    <div className="item-price-old"> DT {props.old_price} </div>

   </div>
</div>

         
      

    

  )
}

export default Items