import React from 'react';
// import { compose } from "redux";
import { connect } from 'react-redux';

import CollectionItem from '../../components/collection-item/collection-item.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { selectCollection, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

import { CollectionPageContainer, CollectionTitle, CollectionItems } from './collection.styles';

const CollectionPage = ({ collections }) => {
  const {title, items} = collections;
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
  collections: selectCollection(ownProps.match.params.collectionId)(state),
  isLoading: !selectIsCollectionsLoaded(state)
})

export default connect(mapStateToProps)(WithSpinner(CollectionPage));