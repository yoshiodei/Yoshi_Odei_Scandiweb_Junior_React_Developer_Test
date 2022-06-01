import React, { Component } from 'react';
import '../Styles/CartTotal/CartTotal.styles.css';

class CartTotal extends Component {
    render() {
        return (
            <div className='cart-total'>
                <div className='cart-total__text-div'>
                    <p className='cart-total__text'>Tax 21%:</p>
                    <p className='cart-total__text cart-total__text--boldened'>$42.00</p>
                    <p className='cart-total__text'>Quantity:</p>
                    <p className='cart-total__text cart-total__text--boldened'>3</p>
                    <p className='cart-total__text'>Total:</p>
                    <p className='cart-total__text cart-total__text--boldened'>$200.00</p>
                </div>
                <button className='cart-total__button'>ORDER</button>
            </div>
        );
    }
}

export default CartTotal;
