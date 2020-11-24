import React from 'react';
import PropTypes from 'prop-types';

import "./cart-item.styles.scss";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <div className="cart-item">
    <img src={imageUrl} alt="item"/>
    <div className="item-details">
      <div className="name">{name}</div>
      <div className="price">{quantity} x ${price}</div>
    </div>
  </div>
)

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem;