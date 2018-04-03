import { call, put, takeLatest, select } from 'redux-saga/effects';
import * as actions from './actionTypes';
import { searchGiphy, fetchTrending } from './api';

const rootSaga = function* rootSaga() {
  yield takeLatest(actions.SEARCH_GIPHY, searchSaga);
  yield takeLatest(actions.FETCH_TRENDING, fetchTrendingSaga);
}

function* searchSaga({ query }) {
  const searches = yield select(state => state);

  if (!searches[query]) {
    try {
      const { data } = yield call(searchGiphy, query);
      yield put({ type: actions.SEARCH_GIPHY_SUCCESS, query, data });
    } catch (e) {
      yield put({ type: actions.SEARCH_GIPHY_FAIL, e });
    }
  }
}

function* fetchTrendingSaga() {
  const searches = yield select(state => state);

  if (!searches['trending']) {
    try {
      const { data } = yield call(fetchTrending);
      yield put({ type: actions.FETCH_TRENDING_SUCCESS, data });
    } catch (e) {
      yield put({ type: actions.FETCH_TRENDING_FAIL, e });
    }
  }
}

export default rootSaga;