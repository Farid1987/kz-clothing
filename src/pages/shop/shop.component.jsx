import React from "react";
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

// import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { fetchCollectionsStartAsync } from '.././../redux/shop/shop.actions';

class shopPage extends React.Component {

  componentDidMount() {
    const { fetchCollections } = this.props;

    fetchCollections();
  }

  render() {
    const {match} = this.props;

    return (
      <div className="shop-page">
        <Route exact path={`${match.path}`} component={CollectionsOverview}/>
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>
    );
  }
};

const mapDispatchToProps = dispatch => ({
  fetchCollections: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToProps)(shopPage);