import React from "react";

import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { AuthContainer } from './auth.styles';
// import "./auth.styles.scss";

const Auth = () => (
  <AuthContainer>
    <SignIn />
    <SignUp />
  </AuthContainer>
);

export default Auth;
