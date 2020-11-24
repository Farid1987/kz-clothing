import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionPreview from "../../components/collection-preview/collection-preview.component";

import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';

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
  collections: selectCollectionsForPreview
})

CollectionsOverview.propTypes = {
  collections: PropTypes.array
}

export default connect(mapStateToProps)(CollectionsOverview);