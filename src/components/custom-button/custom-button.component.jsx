import React from "react";
import PropTypes from 'prop-types';

import { CustomButtonContainer } from './custom-button.styles';

const CustomButton = ({ children, ...otherProps }) => (
  <CustomButtonContainer {...otherProps}>
    {children}
  </CustomButtonContainer>
);

CustomButton.propTypes = {
  children: PropTypes.string,
  props: PropTypes.object
}

export default CustomButton;
