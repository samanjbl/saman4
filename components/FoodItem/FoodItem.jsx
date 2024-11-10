import React, { useContext } from 'react'
import "./FoodItem.css";
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
const FoodItem = ({id,name,description,price,image}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='foot-item-image' src={image} alt="" />
        {
            !cartItems[id] ? <img src={assets.add_icon_white} onClick={()=>addToCart(id)} className='add'/>
            : <div className='food-item-counter'>
                <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
            </div>
        }
      </div>
      <div className="foot-item-info">
        <div className="food-item-name-rating">
            <p>{name}</p>
            <img className='rating-star' src={assets.rating_stars} alt="" />
        </div>
        <p className="food-item-description">{description}</p>
        <p className="food-item-price">${price}</p>
      </div>
    </div>
  )
}

export default FoodItem
