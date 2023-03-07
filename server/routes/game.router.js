const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
  console.log('fetch games request made');
  pool
    .query('SELECT * FROM "games";')
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error fetching games:', error);
      res.sendStatus(500);
    });
  //     console.log(results.rows);

});

// post selected games to DB
router.post('/', (req, res) => {

  pool
    .connect()
    .then(() => {
      for (let game of req.body) {
        console.log(game);
        const userId = game.user_id;
        const gameId = game.game_id;
        const queryText = `INSERT INTO "user_games" ("user_id", "game_id")
      Values ($1, $2)`
        pool.query(queryText, [userId, gameId]);
      }
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('User registration failed: ', err);
      res.sendStatus(500);
    });
});

module.exports = router;