import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_TIMES" actions
function* fetchTimes() {
  try {
    // fetch all times
    const times = yield axios.get('/api/time')
    yield put({ type: 'SET_TIMES', payload: times.data});
    } catch (error) {
        console.log('error with fetchTimes:', error);
    }
}

function* postTimes(action) {
  try{
    yield axios.post('/api/time', action.payload);
  } catch (error) {
      console.log('error with postTimes saga:', error);
  }
}

function* timesSaga() {
  yield takeEvery('FETCH_TIMES', fetchTimes);
  yield takeEvery('REGISTER_TIMES', postTimes);
}

export default timesSaga;