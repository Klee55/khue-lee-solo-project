import { put, takeEvery, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

// worker Saga: will be fired on "REGISTER" actions
function* fetchGames() {
  try {
    // fetch all games
    console.log('in fetch game saga');
    const games = yield axios.get('/api/game')
    console.log(games);
    yield put({ type: 'SET_GAMES', payload: games.data});
    } catch (error) {
        console.log('error with fetchGamesSaga:', error);
    }
}

function* fetchGamesSaga() {
  yield takeEvery('FETCH_GAMES', fetchGames);
}

export default fetchGamesSaga;