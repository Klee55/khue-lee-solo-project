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

// send GET request to server and get times data from DB
function* fetchProfileTimes(action) {
  try {
    const userId = action.payload;
    const userTimes = yield axios.get(`/api/time/profile/${userId}`)

    yield put({ type: 'SET_USER_TIMES', payload: userTimes.data })
  } catch (error) {
    console.log('error with fetchProfileTime sage:', error);
  }
}

// add selected time to user DB
function* postUserTime (action) {
  try {
    console.log(action.payload);
    yield axios.post('/api/time/userTime', action.payload);
  } catch (error) {
    console.log('postUserTime saga failed:', error);
  }
}

function* deleteUserTime (action) {
  try {
    console.log('deleteUserTime saga hit:', action.payload);
    const timeId = action.payload;
    yield axios.delete(`/api/time/${timeId}`);
  } catch (error) {
    console.log('deleteUserTime saga failed:', error);
  }
}

function* timesSaga() {
  yield takeEvery('FETCH_TIMES', fetchTimes);
  yield takeEvery('REGISTER_TIMES', postTimes);
  yield takeEvery('FETCH_PROFILE', fetchProfileTimes);
  yield takeEvery('ADD_USER_TIME', postUserTime);
  yield takeEvery('REMOVE_USER_TIME', deleteUserTime);
}

export default timesSaga;