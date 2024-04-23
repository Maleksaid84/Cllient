import React, { useContext, useState } from 'react'
import './css/ShopCategory.css'
import { ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Assets/dropdown_icon.png'
import Items from '../Items/Items'

const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  const [nameFilter, setNameFilter] = useState('') // État local pour le filtre par nom
  console.log(all_product)

  const changeHandler = (e) => {
    setNameFilter(e.target.value) // Mettre à jour le filtre par nom lorsqu'une option est sélectionnée
  }

  return (
    <div className='shop-category'>

      <img className='shopcategory-banner' src= {props.banner} alt="" />

      <div className="shopcategory-indexSort" >
        <p>
          <span>Showing 1-12</span> out of products
        </p>
        

        <div className="shopcategory-sort">
         
        
          <p>Sort by</p>
          <select value={props.name} onChange={changeHandler} name="name" className='sort-product-selector'>
          <option value="">all</option>

            <option value="Jacket">Jacket</option>
            <option value="Pants">Pants</option>
            <option value="Shirt">Shirt</option>
            <option value="Shorts">Short</option>
            <option value="Parka">Parka</option>
            
          </select>
        </div>
      </div>

      <div className="shopcategory-products">
        {
        all_product.map((item, i) => {
          if (props.category === item.category && item.name.toLowerCase().includes(nameFilter.toLowerCase())) {
            return (
              <Items
                key={item.id}
                id={item._id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          } else {
            return null;
          }
        })}
      </div>

      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  )
}

export default ShopCategory
