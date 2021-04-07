import React from 'react';
import PropTypes from 'prop-types';
import './Style/Item.css'
import myImage from './Images/s20Ultra.png'

const Item = ({item, children}) => (
<div className="Item">
    <div className="Item-left">
        <div >
        <img className="Item-image" src={myImage} alt="Product" />
            </div>
        <div className="Item-title">
            {item.name}
        </div>
        <div className="item-discription">
            {item.description}
        </div>

    </div>
        <div className="Item-right">
            <div className="Item-price">
                ${item.price}
            </div>
    {children}   
     </div>
</div>
);

Item.propTypes ={
    item: PropTypes.object.isRequired,
    onAddToCart: PropTypes.func.isRequired
};

export default Item;