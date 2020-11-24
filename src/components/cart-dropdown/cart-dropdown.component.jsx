import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from 'react-router-dom';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {selectCartItems} from '../../redux/cart/cart.selectors';
import {toggleCartHidden} from '../../redux/cart/cart.actions';

import { CartDropdownContainer, EmptyMessage, CartItemsContainer } from './cart-dropdown.styles';
// import './cart-dropdown.styles.scss';

const CartDropdown = ({cartItems, history, dispatch}) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {
        cartItems.length ?
        (cartItems.map(cartItem => (<CartItem key={cartItem.id} item={cartItem}/>)))
        : (<EmptyMessage>Your cart is empty.</EmptyMessage>)
      }
    </CartItemsContainer>

    <CustomButton onClick={() => {
      history.push('/checkout');
      dispatch(toggleCartHidden());
    }}>GO TO CHECKOUT</CustomButton>
  </CartDropdownContainer>
)

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
})

CartDropdown.propTypes = {
  cartItems: PropTypes.array,
  history: PropTypes.object,
  dispatch: PropTypes.func
}

export default withRouter(connect(mapStateToProps)(CartDropdown));