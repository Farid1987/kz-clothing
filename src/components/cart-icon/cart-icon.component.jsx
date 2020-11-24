import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import { createStructuredSelector } from 'reselect';

import { toggleCartHidden } from '../../redux/cart/cart.actions';
import { selectCartItemsCount } from '../../redux/cart/cart.selectors';

// import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import { CartIconContainer, ShoppingIconContainer, ItemCountContainer } from './cart-icon.styles';
// import './cart-icon.styles.scss';

const CartIcon = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ShoppingIconContainer className="shopping-icon" />
    <ItemCountContainer>{itemCount}</ItemCountContainer>
  </CartIconContainer>
)

const mapDispatchToProps = dispatch => ({
  toggleCartHidden: () => dispatch(toggleCartHidden())
})
const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount
})

CartIcon.propTypes = {
  toggleCartHidden: PropTypes.func,
  itemCount: PropTypes.number
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);