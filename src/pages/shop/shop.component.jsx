import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import CollectionOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
import WithSpinner from '../../components/with-spinner/with-spinner.component';

import { fetchCollectionsStartAsync } from '.././../redux/shop/shop.actions';
import { selectIsCollectionsFecthing, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';

// import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.utils';

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);

class shopPage extends React.Component {

  componentDidMount() {
    const { fetchCollections } = this.props;

    fetchCollections();
  }

  render() {
    const {match, isCollectionsFetching, isCollectionsLoaded} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isCollectionsFetching} {...props}/>}/>
        <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionsLoaded} {...props}/>}/>
      </div>
    );
  }
};

const mapStatetoProps = createStructuredSelector({
  isCollectionsFetching: selectIsCollectionsFecthing,
  isCollectionsLoaded: selectIsCollectionsLoaded
})

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStatetoProps, mapDispatchToProps)(shopPage);