import React, { Component } from 'react';
import '../Styles/CartCard/CartCard.styles.css';

class CartCard extends Component {
    render() {
        return (
            <div className='cart-card'>
                <div className='cart-card__details-div'>
                    <div className='cart-card__left-div'>
                        <div className='cart-card__product-title-div'>
                            <h2 className='cart-card__product-name cart-card__product-name--boldened'>Apollo</h2>
                            <h2 className='cart-card__product-name'>Running Short</h2>
                        </div>

                        <div className='cart-card__price-div'>
                            <p className='cart-card__price'>$50.00</p>
                        </div>

                        <div className='cart-card__size-div'>
                            <h4 className='cart-card__header'>SIZE:</h4>
                            <div className='cart-card__size-inner-div'>
                                <div className='cart-card__size'>
                                    <h6 className='cart-card__size-text' >XS</h6>
                                </div>
                                <div className='cart-card__size'>
                                    <h6 className='cart-card__size-text'>S</h6>
                                </div>
                                <div className='cart-card__size'>
                                    <h6 className='cart-card__size-text'>M</h6>
                                </div>
                                <div className='cart-card__size'>
                                    <h6 className='cart-card__size-text'>L</h6>
                                </div>
                            </div>
                        </div>

                        <div className='cart-card__color-div'>
                            <h4 className='cart-card__header'>COLOR:</h4>
                            <div className='cart-card__color-inner-div'>
                                <div className='cart-card__color product-detail__color--grey'></div>
                                <div className='cart-card__color product-detail__color--black'></div>
                                <div className='cart-card__color product-detail__color--green'></div>
                            </div>
                        </div>

                    </div>
                    
                    <div className='cart-card__right-div'>
                        <div className='cart-card__counter-div'>
                            <div className='cart-card__counter-button'>
                                <p className='cart-card__counter-text'>+</p>
                            </div>
                            <div className='cart-card__counter-value'>
                                <p className='cart-card__counter-text'>1</p>
                            </div>
                            <div className='cart-card__counter-button'>
                                <p className='cart-card__counter-text'>-</p>
                            </div>
                        </div>
                        <div className='cart-card__image-div'>
                            <div></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartCard;
