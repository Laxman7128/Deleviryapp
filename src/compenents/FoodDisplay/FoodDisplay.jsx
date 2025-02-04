import React, { useContext } from 'react'
import './FoodDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../FoodItem/FoodItem';

const FoodDisplay = ({category}) => {
    const {food_list}=useContext(StoreContext);
  return (
    <div className='food-display' id="food-display">
        <h2>Top dishes near you</h2>
        <div className="food-display-list">
            {food_list.map((i,index)=>{
              if(category==="All" || i.category===category){
                return <FoodItem key={index} id={i._id} name={i.name} description={i.description} price={i.price} image={i.image}/>
              }
            })}
        </div>
    </div>
  )
}

export default FoodDisplay