import React from 'react';
import { connect } from 'react-redux';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

// import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import { signUpStart } from '../../redux/user/user.actions';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';
// import './sign-up.styles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  }

  handleSubmit = async event => {
    event.preventDefault();

    const {displayName, email, password, confirmPassword} = this.state;
    const { signUpStart } = this.props;

    if (password !== confirmPassword) {
      alert("Password don't match");
      return;
    }
    
    signUpStart({displayName, email, password});
  }

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({[name]: value});
  }

  render() {
    const {displayName, email, password, confirmPassword} = this.state;
    return(
      <SignUpContainer>
        <SignUpTitle>I do not have a account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            onChange={this.handleChange}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            onChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            onChange={this.handleChange}
            label="confirmPassword"
            required
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userData) => dispatch(signUpStart(userData))
})

export default connect(null, mapDispatchToProps)(SignUp);