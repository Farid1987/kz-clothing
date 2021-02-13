import React from 'react';
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';

import { selectCollection } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, CollectionTitle, CollectionItems } from './collection.styles';
// import "./collection.styles.scss";

const CollectionPage = ({ collections }) => {
  const {title, items} = collections
  return (
    <CollectionPageContainer>
      <CollectionTitle>{ title }</CollectionTitle>
      <CollectionItems>
        {
          items.map(item => <CollectionItem key={item.id} item={item} />)
        }
      </CollectionItems>
    </CollectionPageContainer>
  )
}

const mapStateToProps = (state, ownProps) => ({
  collections: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);