import React from "react";
import PropTypes from 'prop-types';
import {connect} from "react-redux";

import { addItem } from "../../redux/cart/cart.actions";

import { CollectionItemContainer, BackgroundImage, AddButton, CollectionFooterContainer, NameContainer, PriceContainer } from './collection-item.styles';
// import "./collection-item.styles.scss";

const CollectionItem = ({ item, addItem }) => {
  const { name, price, imageUrl } = item;
  return (
    <CollectionItemContainer>
      <BackgroundImage className="image" style={{ backgroundImage: `url(${imageUrl})` }} />
      <CollectionFooterContainer>
        <NameContainer>{name}</NameContainer>
        <PriceContainer>{price}</PriceContainer>
      </CollectionFooterContainer>
      <AddButton inverted onClick={() => addItem(item)}>Add to cart</AddButton>
    </CollectionItemContainer>
  )
};

const mapDispatchToProps = dispatch => ({
  addItem: item => dispatch(addItem(item))
})

CollectionItem.propTypes = {
  item: PropTypes.object,
  addItem: PropTypes.func
}

export default connect(null, mapDispatchToProps)(CollectionItem);
