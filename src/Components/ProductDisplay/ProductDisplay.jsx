import React from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { useContext } from 'react';
import { ShopContext } from '../Context/ShopContext';

export const ProductDisplay = (props) => {
    
    const { product } = props;
    console.log(props)

    const { addToCart } = useContext(ShopContext);

 
    if (!product) {
        return 
    }

    const isClothing =
        product.category.toLowerCase() === 'women' ||
        product.category.toLowerCase() === 'men' ||
        product.category.toLowerCase() === 'kid';

    return (
        <div className='ProductDisplay'>
            <div className="ProductDisplay-left">
                <div className="ProductDisplay-list">
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />
                    <img src={product.image} alt="" />

                </div>
                <div className="ProductDisplay-img">
                    <img className='ProductDisplay-main-img'

                        src={product.image} alt="" />
                </div>
            </div>

            <div className="ProductDisplay-right">
                <h1>{product.name}</h1>

                <div className="ProductDisplay-right-stars">

                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_icon} alt="" />
                    <img src={star_dull_icon} alt="" />

                    <p>(122)</p>
                </div>

                <div className="ProductDisplay-right-prices">

                    <div className="ProductDisplay-right-old-price"> DT{product.old_price}</div>
                    <div className="ProductDisplay-right-new-price"> DT{product.new_price}</div>

                </div>
                <div className="ProductDisplay-right-description"> REMPLIRE LA DISCRIPTION </div>

                <button onClick={() => { addToCart(product._id) }}>ADD TO CART</button>

                <p className='ProductDisplay-right-category'>

                    <span>Category :</span> Women , T-shirt, Corp Top
                </p>
                <p className='ProductDisplay-right-category'>
                    <span>Tags :</span> Modern, Latest
                </p>
            </div>
        </div>
    );
};

export default ProductDisplay;
