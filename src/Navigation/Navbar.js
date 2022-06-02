import React, { Component } from 'react';
import '../Styles/Nav/Nav.styles.css';
import logo from '../Assets/logo.svg';
import cart from '../Assets/cart.svg';
import arrow from '../Assets/arrow.svg';

class Navbar extends Component {
    render() {
        return (
            <nav className='navbar'>
               <ul className='navbar__list'>
                   <li className='navbar__list-item navbar__list-item--active'>WOMEN</li>
                   <li className='navbar__list-item'>MEN</li>
                   <li className='navbar__list-item'>KIDS</li>
               </ul>

               <div className='navbar__logo'>
                    <img src={logo} alt='logo'/> 
               </div> 

               <div className='navbar__icons'>
                    <div className='navbar__currency-button'>
                       <p>$</p>
                       <img src={arrow} className='navbar__cart-icon' />
                    </div>
                    <div className='navbar__cart-button'>
                       <img src={cart} className='navbar__cart-icon' />
                    </div>
                   {/* <select>
                       <option>$ USD</option>
                       <option>€ EUR</option>
                       <option>¥ JPY</option>
                   </select> */}
               </div> 
            </nav>
        );
    }
}

export default Navbar;
