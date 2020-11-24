import React from "react";
import { withRouter } from "react-router-dom";
import PropTypes from 'prop-types';

import { MenuItemContainer, BackgroundImgContainer, MenuItemContent, MenuItemTitle, MenuItemSubtitle } from './menu-item.styles';
import "./menu-item.styles.scss";

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => {
  return (
    <MenuItemContainer
      className={`${size}`}
      onClick={() => history.push(`${match.url}${linkUrl}`)}
    >
      <BackgroundImgContainer
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></BackgroundImgContainer>
      <MenuItemContent>
        <MenuItemTitle>{title.toUpperCase()}</MenuItemTitle>
        <MenuItemSubtitle>SHOP NOW</MenuItemSubtitle>
      </MenuItemContent>
    </MenuItemContainer>
  );
};

MenuItem.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
  title: PropTypes.string,
  imageUrl: PropTypes.string,
  size: PropTypes.string,
  linkUrl: PropTypes.string,
}

export default withRouter(MenuItem);
