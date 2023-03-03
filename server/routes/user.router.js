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

// Handles POST request with new user data
// The only thing different from this and every other post we've seen
// is that the password gets encrypted before being inserted
router.post('/register', (req, res, next) => {
  const username = req.body.username;
  const password = encryptLib.encryptPassword(req.body.password);
  const about = req.body.about;

  const queryText = `INSERT INTO "user" (username, password, about)
    VALUES ($1, $2, $3) RETURNING id`;
  pool
    .query(queryText, [username, password, about])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

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

// route for game input from registration form
router.post('/game', (req, res) => {
  pool.connect()
    .then(() => {
      for (let game of req.body.game) {
        const queryText = `INSERT INTO "games" (game)
          VALUES ($1);`;
        pool.query(queryText, [game])
      }
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('game registration failed:', err);
      res.sendStatus(500);
    });
});

// route for playstyle input from registration form
router.post('/playstyle', (req, res) => {
  const playstyle = req.body.playstyle;
});

// route for time input from registration form
router.post('/time', (req, res) => {
  const time = req.body.time;
});
module.exports = router;
