import React, { useContext } from 'react';
import './DrinkDisplay.css';
import { StoreContext } from '../../context/StoreContext';
import DrinkItem from '../DrinkItem/DrinkItem';

const DrinkDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  return (
    <div className='Drink-display' id='Drink-display'>
      <h2>Top selling Drinks near you</h2>
      <div className='Drink-Display_list'>
        {food_list.map((item, index) => {
        if (category==="All" || category===item.category){
          return <DrinkItem key={index} item={item} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }

        })}
      </div>
    </div>
  );
};

export default DrinkDisplay;
