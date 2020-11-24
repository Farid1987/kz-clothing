import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {clearItemFromCart, addItem, removeItem} from '../../redux/cart/cart.actions';

import { CheckoutItemContainer, ImageContainer, QuantityContainer, TextContainer, RemoveButtonContaienr } from './checkout-item.styles';
// import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const {name, imageUrl, price, quantity} = cartItem
  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt="item"/>
      </ImageContainer>
      <TextContainer>{name}</TextContainer>
      <QuantityContainer>
        <div onClick={() => removeItem(cartItem)}>&#10094;</div>
        <span>{quantity}</span>
        <div onClick={() => addItem(cartItem)}>&#10095;</div>
      </QuantityContainer>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContaienr onClick={() => clearItem(cartItem)}>&#10005;</RemoveButtonContaienr>
    </CheckoutItemContainer>
  )
}

const mapDispatchToProps = dispatch => ({
  clearItem: item => dispatch(clearItemFromCart(item)),
  addItem: item => dispatch(addItem(item)),
  removeItem: item => dispatch(removeItem(item))
})

CheckoutItem.propTypes = {
  cartItem: PropTypes.object,
  clearItem: PropTypes.func,
  addItem: PropTypes.func,
  removeItem: PropTypes.func
}

export default connect(null, mapDispatchToProps)(CheckoutItem);