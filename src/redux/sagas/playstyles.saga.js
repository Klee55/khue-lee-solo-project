import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_PLAYSTYLES" actions
function* fetchPlaystyles() {
  try {
    // fetch all playstyles
    const playstyles = yield axios.get('/api/playstyle')
    yield put({ type: 'SET_PLAYSTYLES', payload: playstyles.data});
    } catch (error) {
        console.log('error with fetchPlaystylesSaga:', error);
    }
}

function* playstylesSaga() {
  yield takeEvery('FETCH_PLAYSTYLES', fetchPlaystyles);
}

export default playstylesSaga;