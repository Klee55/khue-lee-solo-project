import axios from 'axios';
import { put, takeEvery, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
    console.log(response.data.about);
    yield put({type: 'SET_USER_ABOUT', payload: response.data.about});
  } catch (error) {
    console.log('User get request failed', error);
  }
}

// update user about into DB
function* saveUserAbout(action) {
  try {
    console.log(action.payload)
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };
    yield axios.post('/api/user/about', {about: action.payload});
  } catch (error) {
    console.log ('saveUserAbout saga failed:', error);
  }
}
  

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeEvery('SAVE_USER_ABOUT', saveUserAbout);
}

export default userSaga;
