import React from 'react';

import { SpinnerOverlay, SpinnerContainer } from './with-spinner.styles';

const WithSpinner = WrappedComponent => ({ isLoading, ...otherProps }) => {
  return isLoading ?  (
    <SpinnerOverlay>
      <SpinnerContainer></SpinnerContainer>
    </SpinnerOverlay>
  ) : (
    <WrappedComponent {...otherProps}></WrappedComponent>
  )
}

export default WithSpinner;