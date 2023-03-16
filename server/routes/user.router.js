const express = require('express');
const {
  rejectUnauthenticated,
} = require('../modules/authentication-middleware');
const encryptLib = require('../modules/encryption');
const pool = require('../modules/pool');
const userStrategy = require('../strategies/user.strategy');

const router = express.Router();

// Handles Ajax request for user information if user is authenticated
router.get('/', rejectUnauthenticated, (req, res) => {
  // Send back user object from the session (previously queried from the database)
  res.send(req.user);
});

// fetch usernames and about from user table
router.get('/players/:id', (req, res) => {
  console.log('fetchPlayer get request made', req.params);
  const id = Number(req.params.id);
  const queryText = `SELECT "id", "username" FROM "user" EXCEPT SELECT "id", "username" FROM "user" WHERE "id" = $1;`;
  pool
    .query(queryText, [id])
    .then((results) => {
      res.send(results.rows)
    })
    .catch((err) => {
      console.log('error with fetchPlayers', err);
    });
});

router.get('/player/:id', (req, res) => {
  // console.log('fetchOnePlayer get request made', req.params);
  const id = Number(req.params.id);
  const queryText = `SELECT "username", "about" FROM "user" WHERE "id" = $1`;
  pool
    .query(queryText, [id])
    .then((results) => {
      res.send(results.rows)
    })
    .catch((err) => {
      console.log('error with fetchPlayers', err);
    });
})

// fetch friends from DB
router.get('/friend/:id', (req, res) => {
  console.log('fetchFriend get request made', req.params);
  const id = Number(req.params.id);
  const queryText = `SELECT "player_id", "username" FROM "friend_list" WHERE "user_id" = $1;`;
  pool
    .query(queryText, [id])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('error with fetchFriend get request:', err);
    })
})

router.post('/player', (req, res) => {
  console.log('addPlayer post request made:', req.body);
  const playerId = req.body.id;
  const username = req.body.username;
  const userId = req.user.id;
  const queryText = `INSERT INTO "friend_list" ("player_id", "username", "user_id")
      VALUES ($1, $2, $3);`;
  pool
    .query(queryText, [playerId, username, userId])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('error with addPlayer post request:', err);
    });
});

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);

  const queryText = `INSERT INTO "user" (username, password)
    VALUES ($1, $2) RETURNING id`;
  pool
    .query(queryText, [username, password])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});


// update user about into DB from edit page
router.post('/about', (req, res) => {
  console.log('upade about post request made:', req.body.about);
  const about = req.body.about
  const userId = req.user.id
  const queryText = `UPDATE "user" SET "about" = $2 WHERE "user"."id" = $1;`;
  pool
    .query(queryText, [userId, about])
    .then(() => res.sendStatus(200))
    .catch((err) => {
      console.log('useAbout put request failed:', err);
    });
})

// Handles login form authenticate/login POST
// userStrategy.authenticate('local') is middleware that we run on this route
// this middleware will run our POST if successful
// this middleware will send a 404 if not successful
router.post('/login', userStrategy.authenticate('local'), (req, res) => {
  res.sendStatus(200);
});

// clear all server session information about this user
router.post('/logout', (req, res) => {
  // Use passport's built-in method to log out the user
  req.logout();
  res.sendStatus(200);
});

module.exports = router;
