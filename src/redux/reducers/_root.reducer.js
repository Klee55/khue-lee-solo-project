import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import gameReducer from './game.reducer';
import aboutReducer from './about.reducer';
import playstyleReducer from './playstyle.reducer';
import timeReducer from './time.reducer';
import fetchGamesReducer from './fetchGames.reducer';
import fetchPlaystylesReducer from './fetchPlaystyles.reducer';
import userGamesReducer from './userGames.reducer';
import userPlaystylesReducer from './userPlaystyles.reducer';
import userTimesReducer from './userTimes.reducer';
import userAboutReducer from './userAbout.reducer';
import fetchPlayersReducer from './fetchPlayers.reducer';
import onePlayerReducer from './onePlayer.reducer';

// rootReducer is the primary reducer for our entire project
// It bundles up all of the other reducers so our project can use them.
// This is imported in index.js as rootSaga

// Lets make a bigger object for our store, with the objects from our reducers.
// This is what we get when we use 'state' inside of 'mapStateToProps'
const rootReducer = combineReducers({
  errors, // contains registrationMessage and loginMessage
  user, // will have an id and username if someone is logged in
  gameReducer,
  aboutReducer,
  playstyleReducer,
  timeReducer,
  fetchGamesReducer,
  fetchPlaystylesReducer,
  userGamesReducer,
  userPlaystylesReducer,
  userTimesReducer,
  userAboutReducer,
  fetchPlayersReducer,
  onePlayerReducer
});

export default rootReducer;
