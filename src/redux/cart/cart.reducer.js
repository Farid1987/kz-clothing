import { cartActionTypes } from './cart.types';

const INITIAL_STATE = {
  hiddenValue: true
}

const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case cartActionTypes.TOGGLE_CART_HIDDEN:
      return {
        ...state,
        hiddenValue: !state.hiddenValue
      }
    default:
      return state;
  }
}

export default cartReducer;