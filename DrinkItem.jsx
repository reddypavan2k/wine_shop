import React from 'react';
import './DrinkItem.css';

const DrinkItem = ({ id, name, price, description, image }) => {
    
    return (
        <div className='food-item'>
            <div className='food-item-img-container'>
                <img className='food-item-image' src={image} alt={`${name} image`} /> 
            </div>
            <div className='food-item-info'>
                <p className='food-item-name'>{name}</p>
                <p className='food-item-desc'>{description}</p>
                <p className='food-item-price'>${price}</p>
            </div>
        </div>
    );
};

export default DrinkItem;
