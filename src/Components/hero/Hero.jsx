import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/hero_image.png'
import CarrouselNewProducts from '../Carousel/CarrouselNewProducts'
import { Link } from 'react-router-dom'





const Hero = () => {
  
  return (
    <div className='hero'>
             
        <div className='hero-left'>
         <h2>New Arrivals Only</h2>

         <div>
            

         <div className="hero-hand-icon">
            <p>New</p>
            <img className='arrow' src={hand_icon} alt='' />
            </div>
            <p>Products</p>
            <p>For everyone</p>
            </div>
            <div className="hero-latest-btn">
            <Link to="/Latestcollection" style={{ textDecoration: 'none' }}>Latest collection</Link>
          <img src={arrow_icon} alt="" />            
            </div>

                      </div>

        <div className="hero-right">
          <CarrouselNewProducts/>
          

        </div>
    </div>
  )
}

export default Hero