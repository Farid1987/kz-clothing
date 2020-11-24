import React from "react";
import PropTypes from 'prop-types';

import CollectionItem from "../collection-item/collection-item.component";

import { CollectionPreviewContainer, TitleContainer, PreviewContainer } from './collection-preview.styles';
// import "./collection-preview.styles.scss";

const CollectionPreview = ({ title, items }) => {
  return (
    <CollectionPreviewContainer>
      <TitleContainer>{title.toUpperCase()}</TitleContainer>
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

export default CollectionPreview;
