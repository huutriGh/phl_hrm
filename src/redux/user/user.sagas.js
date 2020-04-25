import { all, call, put, takeLatest } from 'redux-saga/effects';
import { login } from './../../api/api.utils';
import {
  signInFailure,
  signInSuccess,
  signOutFailure,
  signOutSuccess,
} from './user.actions';
import UserActionTypes from './user.types';

export function* getSnapshotFromUserAuth(userAuth, additionalData) {
  try {
    yield put(signInSuccess(userAuth));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signInWithUser({ payload: { userName, password } }) {
  try {
    const res = yield call(login, { userName, password });
    const user = {
      userId: res.data.userId,
      userName: res.data.userName,
      businessEntityID: res.data.businessEntityID,
      token: res.data.access_token,
      expiresIn: res.data.expires_in,
      userFuntion: res.data.userFuntion,
      UserPage: res.data.userPage,
      //  refreshToken: res.data.refreshToken
    };
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}
export function* isUserAuthenticated() {
  try {
    const user = yield JSON.parse(sessionStorage.getItem('persist:root'));
    if (!user.currentUser) return;
    yield put(signInSuccess(user));
  } catch (error) {
    yield put(signInFailure(error));
  }
}

export function* signOut() {
  try {
    yield put(signOutSuccess());
  } catch (error) {
    yield put(signOutFailure(error));
  }
}

export function* onSignInStart() {
  yield takeLatest(UserActionTypes.SIGN_IN_START, signInWithUser);
}

export function* checkUserSession() {
  yield takeLatest(UserActionTypes.CHECK_USER_SESSION, isUserAuthenticated);
}

export function* onSignOutStart() {
  yield takeLatest(UserActionTypes.SIGN_OUT_START, signOut);
}

export function* userSagas() {
  yield all([
    call(onSignInStart),
    call(checkUserSession),
    call(onSignOutStart),
  ]);
}
