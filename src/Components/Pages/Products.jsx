import React, { useContext } from 'react'
import {useParams} from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import Breadcrum from '../Breadcrums/Breadcrum';
import ProductDisplay from '../ProductDisplay/ProductDisplay';
import DescriptionBox from '../DescriptionBox/DescriptionBox';



const Products = () => {
  
  const {all_product }= useContext(ShopContext);
  const {productId}   = useParams(); 
  console.log(productId)
  const product = all_product.find((e)=> e._id === productId);
  console.log(product,all_product)
  return (
    <div>
      
      <Breadcrum        product  = {product} />
      <ProductDisplay   product  = {product} />
      <DescriptionBox/>
      
     
    </div>
  )
}

export default Products