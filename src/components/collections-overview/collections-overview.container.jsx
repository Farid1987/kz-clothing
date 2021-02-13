import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CollectionOverview from './collections-overview.component';
import WithSpinner from '../with-spinner/with-spinner.component';

import { selectIsCollectionsFecthing } from '../../redux/shop/shop.selectors';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionsFecthing
});

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default(CollectionsOverviewContainer);