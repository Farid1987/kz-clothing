import React from "react";
// import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import PropTypes from 'prop-types';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectCartHidden } from "../../redux/cart/cart.selectors";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { signOutStart } from "../../redux/user/user.actions";

import { HeaderContainer, OptionsContainer, LogoContainer, OptionLink } from './header.styles';

const Header = ({ currentUser, hiddenValue, signOutStart }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/shop">
        CONTACT
      </OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={signOutStart}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/auth">
          SIGN IN
        </OptionLink>
      )}
      <CartIcon/>
    </OptionsContainer>
    {
      hiddenValue ? null:<CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hiddenValue: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

Header.propTypes = {
  currentUser: PropTypes.object,
  hiddenValue: PropTypes.bool
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
