import React, { useContext, useRef, useState } from 'react';
import './Navbar.css';

import logo from       '../Assets/logo.png'
import cart_icon from  '../Assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext';
import nav_dropdown    from '../Assets/Dropdown.png'



const Navbar = () => {

  const [menu,setMenu] = useState ("Shop")
  const {getTotalCartItems} = useContext(ShopContext)
  const menuRef = useRef();
  const dropdown_toggele = (e)=> {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
  }     
  return (
    <div className='navbar'>

    <div className='nav-logo'>
        <img className='img-logo' src={logo} alt='' />
        <div><p>Nature is calling !</p></div>
        
    </div>    
        <img className='nav-dropdown' onClick={dropdown_toggele} src={nav_dropdown} alt="" />
    <ul ref={menuRef} className='nav-menu'>
        <li onClick={()=>{setMenu ("Shop")}}>        <Link style={{textDecoration:'none'}} to = '/'> Shop                        </Link> {menu ==="Shop"?  <hr/>:<></>} </li>
        <li onClick={()=>{setMenu ("mens")}}>        <Link style={{textDecoration:'none'}} to = '/mens'> Men                     </Link> {menu ==="mens"?  <hr/>:<></>} </li>
        <li onClick={()=>{setMenu ("womens")}}>       <Link style={{textDecoration:'none'}} to = '/womens'> Women                 </Link> {menu ==="womens"?<hr/>:<></>} </li>
        <li onClick={()=>{setMenu ("kids")}}>         <Link style={{textDecoration:'none'}} to = '/kids'> Kids                   </Link> {menu ==="kids"?  <hr/>:<></>} </li>
        <li onClick={()=>{setMenu ("camping Gear")}}> <Link style={{textDecoration:'none'}} to = '/camping Gear'> Camping Gear   </Link> {menu ==="camping Gear"?  <hr/>:<></>} </li>
             </ul>

    <div className='nav-login-cart'>
        
    {localStorage.getItem('auth-token') ? (
        <button onClick={() => {
            localStorage.removeItem('auth-token');
            window.location.replace('/');
        }}>Logout</button>
    ) : (
        <Link to='/login'>
            <button>Login</button>
        </Link>
    )}
        
       
        <Link to= '/cart'><img src={cart_icon} alt='' /></Link>
        <nav className='nav-cart-count'>{getTotalCartItems()}</nav>
    </div>

        




    </div>
  )
}

export default Navbar
