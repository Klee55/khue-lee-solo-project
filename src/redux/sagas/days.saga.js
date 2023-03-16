import { put, takeEvery } from 'redux-saga/effects';
import axios from 'axios';


function* fetchDays() {
    try {
        // console.log('fetchDays saga hit');
        const days = yield axios.get('/api/day');
        console.log(days.data);
        yield put({ type: 'SET_DAY', payload: days.data });
    } catch (error) {
        console.log('error with fetchDays saga:', error);
    }
}


function* daysSaga() {
    yield takeEvery('FETCH_DAYS', fetchDays);
}

export default daysSaga;
