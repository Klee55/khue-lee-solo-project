import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_TIMES" actions
function* fetchTimes() {
  try {
    // fetch all times
    const times = yield axios.get('/api/time')
    yield put({ type: 'SET_TIMES', payload: times.data });
  } catch (error) {
    console.log('error with fetchTimes:', error);
  }
}

function* postTimes(action) {
  try {
    yield axios.post('/api/time', action.payload);
  } catch (error) {
    console.log('error with postTimes saga:', error);
  }
}

function* fetchProfileTimes(action) {
  try {
    const userId = action.payload;
    const userTimes = yield axios.get(`/api/time/profile/${userId}`)

    yield put({ type: 'SET_USER_TIMES', payload: userTimes.data })
  } catch (error) {
    console.log('error with fetchProfileTime sage:', error);
  }
}

function* timesSaga() {
  yield takeEvery('FETCH_TIMES', fetchTimes);
  yield takeEvery('REGISTER_TIMES', postTimes);
  yield takeEvery('FETCH_PROFILE', fetchProfileTimes)
}

export default timesSaga;