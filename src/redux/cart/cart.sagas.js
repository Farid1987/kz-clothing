import {all, call, takeLatest, put} from 'redux-saga/effects';

import userActionTypes from '../../redux/user/user.types';
import { clearCart } from '../../redux/cart/cart.actions';


export function* clearCartOnSignOut() {
  yield put(clearCart())
}

export function* onSignOutSuccess() {
  yield takeLatest(userActionTypes.SIGN_OUT_SUCCESS, clearCartOnSignOut)
}

export function* cartSagas() {
  yield all([
    call(onSignOutSuccess)
  ])
}