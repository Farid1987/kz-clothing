import React from 'react';
import PropTypes from 'prop-types';
import { compose } from "redux";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";
import WithSpinner from '../with-spinner/with-spinner.component';

import { selectCollectionsForPreview, selectIsCollectionsFecthing } from '../../redux/shop/shop.selectors';

import { CollectionsOverviewContainer } from './collections-overview.styles';
// import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
  <CollectionsOverviewContainer>
    {collections.map(({ id, ...otherProps }) => (
      <CollectionPreview key={id} {...otherProps} />
    ))}
  </CollectionsOverviewContainer>
)

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreview,
  isLoading: selectIsCollectionsFecthing
})

CollectionsOverview.propTypes = {
  collections: PropTypes.array
}

export default compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionsOverview);