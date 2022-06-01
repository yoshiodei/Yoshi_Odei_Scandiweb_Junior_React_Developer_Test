import React, { Component } from 'react';
import '../Styles/CategoryCard/CategoryCard.styles.css';

class CategoryCard extends Component {
    render() {
        return (
            <div className='card'>
                <div className="card__image-div">
                    <div className="card__button-div"></div>
                </div>
                <div className="card__text-div">
                    <p className="card__item-name">Apollo Running Short</p>
                    <p className="card__item-price">$50.00</p>
                </div>
            </div>
        );
    }
}

export default CategoryCard;
