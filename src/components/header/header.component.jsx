import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

import { ReactComponent as Logo } from "../../assets/crown.svg";

import { auth } from "../../firebase/firebase.utils.js";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import "./header.styles.scss";

const Header = ({ currentUser, hiddenValue }) => (
  <div className="header">
    <Link className="logo-container" to="/">
      <Logo className="logo" />
    </Link>
    <div className="options">
      <Link className="option" to="/shop">
        SHOP
      </Link>
      <Link className="option" to="/shop">
        CONTACT
      </Link>
      {currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>
          SIGN OUT
        </div>
      ) : (
        <Link className="option" to="/auth">
          SIGN IN
        </Link>
      )}
      <CartIcon/>
    </div>
    {
      hiddenValue? null:<CartDropdown/>
    }
  </div>
);

const mapStateToProps = ({user: {currentUser}, cart: {hiddenValue}}) => ({
  currentUser,
  hiddenValue
})

export default connect(mapStateToProps)(Header);
