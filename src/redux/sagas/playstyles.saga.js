import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';
import { func } from 'prop-types';

// worker Saga: will be fired on "FETCH_PLAYSTYLES" actions
function* fetchPlaystyles() {
  try {
    // fetch all playstyles
    const playstyles = yield axios.get('/api/playstyle')
    yield put({ type: 'SET_PLAYSTYLES', payload: playstyles.data });
  } catch (error) {
    console.log('error with fetchPlaystylesSaga:', error);
  }
}

// fired off on "REGISTER_PLAYSTYLES"
function* postPlaystyles(action) {
  // post playstyles reducer to router
  try {
    yield axios.post('/api/playstyle', action.payload)
  } catch (error) {
    console.log('error with postPlaystyles:', error);
  }
}

function* fetchProfilePlaystyles(action) {
  try {
    const userId = action.payload;
    const userPlaystyles = yield axios.get(`/api/playstyle/profile/${userId}`);

    yield put({ type: 'SET_USER_PLAYSTYLES', payload: userPlaystyles.data });
  } catch (error) {
    console.log('fetchProfilePlaystyles saga failed:', error);
  }
}

function* postUserPlaystyle(action) {
  try {
    console.log('postUserPlaystyle sage hit:', action.payload);
    yield axios.post('/api/playstyle/userPlaystyle', action.payload);

  } catch (error) {
    console.log('postUserPlaystyle saga failed:', error);
  }
}

function* playstylesSaga() {
  yield takeEvery('FETCH_PLAYSTYLES', fetchPlaystyles);
  yield takeEvery('REGISTER_PLAYSTYLES', postPlaystyles);
  yield takeEvery('FETCH_PROFILE', fetchProfilePlaystyles);
  yield takeEvery('ADD_USER_PLAYSTYLE', postUserPlaystyle);
}

export default playstylesSaga;