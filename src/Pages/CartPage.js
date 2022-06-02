import React, { Component } from 'react';
import CartCard from '../Components/CartCard';
import CartTotal from '../Components/CartTotal';
import '../Styles/Cart/Cart.styles.css';

class CartPage extends Component {
    render() {
        return (
            <div className='cart'>
                <h1 className='cart__header'>CART</h1>
                <section className='cart-section'>
                    <CartCard />
                    <CartCard />
                    <CartCard />
                    <CartTotal />
                </section>
            </div>
        );
    }
}

export default CartPage;
