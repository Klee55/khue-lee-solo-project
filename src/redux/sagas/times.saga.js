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

function* timesSaga() {
  yield takeEvery('FETCH_TIMES', fetchTimes);
}

export default timesSaga;