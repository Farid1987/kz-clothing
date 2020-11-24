import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import PropTypes from 'prop-types';


import CheckoutItem from '../../components/checkout-item/checkout-item.component';
import StripeCheckoutButton from '../../components/stripe-button/stripe-button.component';

import {selectCartItems,selectCartTotal} from '../../redux/cart/cart.selectors';

import { CheckoutPageContainer, CheckoutHeaderContainer, HeaderBlockContainer, TotalContainer, TextWarningContainer } from './checkout.styles';
// import "./checkout.styles.scss";

const CheckoutPage = ({cartItems, total}) => (
  <CheckoutPageContainer>
    <CheckoutHeaderContainer>
      <HeaderBlockContainer>
        <span>Product</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Description</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Quantity</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Price</span>
      </HeaderBlockContainer>
      <HeaderBlockContainer>
        <span>Remove</span>
      </HeaderBlockContainer>
    </CheckoutHeaderContainer>
    {
      cartItems.map(cartItem => (<CheckoutItem key={cartItem.id} cartItem={cartItem}/>))
    }

    <TotalContainer>
      <span>Total: ${total}</span>
    </TotalContainer>

    <TextWarningContainer>
      *Please use the following test creadit card for payments*
      <br/>
      4242 4242 4242 4242 - Exp: 01/21 - CVV: 123
    </TextWarningContainer>

    <StripeCheckoutButton price={total}/>
  </CheckoutPageContainer>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal
})

CheckoutPage.propTypes = {
  cartItems: PropTypes.array,
  total: PropTypes.number
}

export default connect(mapStateToProps)(CheckoutPage);