import { put, take, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "FETCH_GAMES" actions
function* fetchGames() {
  try {
    // fetch all games
    const games = yield axios.get('/api/game');
    console.log(games);
    yield put({ type: 'SET_GAMES', payload: games.data });
  } catch (error) {
    console.log('error with fetchGamesSaga:', error);
  }
}

function* postGames(action) {
  try {
    // add games to DB
    console.log(action.payload);
    yield axios.post('/api/game', action.payload);
  } catch (error) {
    console.log('error with postGamesSaga:', error);
  }
}

function* fetchProfileGames(action) {
  try {
    console.log('fetch profileGame saga hit');
    const userId = action.payload;
    const userGames = yield axios.get(`/api/game/profile/${userId}`);

    yield put({ type: 'SET_USER_GAMES', payload: userGames.data });
  } catch (error) {
    console.log('fetchProfileGames saga failed:', error);
  }
}

function* postUserGame(action) {
  try {
    // add one game to DB
    yield axios.post('/api/game/userGame', action.payload);
  } catch (error) {
    console.log('error with postUserGame Saga:', error);
  }
}

function* deleteUserGame(action) {
  try {
    // delete one game from DB
    const gameId = action.payload
    yield axios.delete(`/api/game/${gameId}`);
  } catch (error) {
    console.log('error with delete game sage;', error)
  }
}

function* gamesSaga() {
  yield takeEvery('FETCH_GAMES', fetchGames);
  yield takeEvery('REGISTER_GAMES', postGames);
  yield takeLatest('FETCH_PROFILE', fetchProfileGames);
  yield takeEvery('ADD_USER_GAME', postUserGame);
  yield takeEvery('REMOVE_USER_GAME', deleteUserGame);
}

export default gamesSaga;