import React from "react";
import PropTypes from 'prop-types';

import { FormInputGroup, FormInputField, FormInputLabel } from './form-input.styles';
// import "./form-input.styles.scss";

const FormInput = ({ handleChange, label, ...otherProps }) => (
  <FormInputGroup>
    <FormInputField onChange={handleChange} {...otherProps} />
    {label ? (
      <FormInputLabel
        className={`${otherProps.value.length ? "shrink" : ""}`}
      >
        {label}
      </FormInputLabel>
    ) : null}
  </FormInputGroup>
);

FormInput.propTypes = {
  handleChange: PropTypes.func,
  label: PropTypes.string
}

export default FormInput;
