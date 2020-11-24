import React from 'react';
import PropTypes from 'prop-types';

import { CartItemContainer, ItemsDetailContainer, ItemsDetailName } from './cart-item.styles';
// import "./cart-item.styles.scss";

const CartItem = ({item: {imageUrl, price, name, quantity}}) => (
  <CartItemContainer>
    <img src={imageUrl} alt="item"/>
    <ItemsDetailContainer>
      <ItemsDetailName>{name}</ItemsDetailName>
      <div>{quantity} x ${price}</div>
    </ItemsDetailContainer>
  </CartItemContainer>
)

CartItem.propTypes = {
  item: PropTypes.object
}

export default CartItem;