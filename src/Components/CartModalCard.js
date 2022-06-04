import React, { Component } from 'react';
import '../Styles/CartModalCard/CartModalCard.sttyles.scss';

class CartModalCard extends Component {
    render() {
        return (
            <div className='modal-card'>
                <div className='modal-card__details-div'>
                    <div className='modal-card__name-div'>
                        <h3 className='modal-card__name'>Apollo</h3>
                        <h3 className='modal-card__name' >Running Short</h3>
                    </div>

                    <div className='modal-card__price-div'>
                        <h3 className='modal-card__price'>$50.00</h3>
                    </div>

                    <div className='modal-card__size-div'>
                        <h4 className='modal-card__size-header'>Size:</h4>
                        <div className='modal-card__size-inner-div'>
                            <div className='modal-card__size'>
                                <p>XS</p>
                            </div>
                            <div className='modal-card__size'>
                                <p>S</p>
                            </div>
                            <div className='modal-card__size'>
                                <p>M</p>
                            </div>
                            <div className='modal-card__size'>
                                <p>L</p>
                            </div>
                        </div>
                    </div>

                    <div className='modal-card__color-div'>
                        <h4 className='modal-card__color-header'>Color:</h4>
                        <div className='modal-card__color-inner-div'>
                            <div className='modal-card__color'></div>
                            <div className='modal-card__color modal-card__color--black'></div>
                            <div className='modal-card__color modal-card__color--green'></div>
                        </div>
                    </div>
                </div>

                <div className='modal-card__item-div'>
                    <div className='modal-card__counter-div'>
                        <div className='modal-card__counter-button'>
                            <p className='modal-card__counter-button-text'>+</p>
                        </div>

                        <div className='modal-card__counter-value'>
                            <p className='modal-card__counter-text'>1</p>
                        </div>

                        <div className='modal-card__counter-button'>
                            <p className='modal-card__counter-button-text'>-</p>
                        </div>
                    </div>

                    <div className='modal-card__image-div'>
                        <div className='modal-card__image-nav-div'>
                            <div className='modal-card__image-nav'></div>
                            <div className='modal-card__image-nav'></div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CartModalCard;
