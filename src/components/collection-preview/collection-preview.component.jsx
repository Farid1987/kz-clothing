import React from "react";
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';
// import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items, history, match, routeName }) => {
  console.log(routeName);
  return (
    <CollectionPreviewContainer>
      <TitleContainer onClick={() => history.push(`${match.path}/${routeName}`)}>{title.toUpperCase()}</TitleContainer>
      <PreviewContainer>
        {items
          .filter((item, index) => index < 4)
          .map((item) => (
            <CollectionItem key={item.id} item={item} />
          ))}
      </PreviewContainer>
    </CollectionPreviewContainer>
  );
};

CollectionPreview.propTypes = {
  title: PropTypes.string,
  items: PropTypes.array
}

export default withRouter(CollectionPreview);
