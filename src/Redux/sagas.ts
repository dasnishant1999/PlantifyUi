import {call, put, takeLatest} from 'redux-saga/effects';
import {SET_PRODUCTS, GET_PRODUCTS} from './messageSlice';
import {getUser} from './api';

function* fetchUser({payload}) {
  try {
    const products = yield call(getUser);
    yield put(SET_PRODUCTS(products?.data));
  } catch (e) {
    console.log(e);
  }
}

function* mySaga() {
  yield takeLatest(GET_PRODUCTS, fetchUser);
}

export default mySaga;
