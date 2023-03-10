const { query } = require('express');
const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

router.get('/', (req, res) => {

  pool
    .query('SELECT * FROM "games";')
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error fetching games:', error);
      res.sendStatus(500);
    });
});

// fetch all user's info from DB
router.get('/profile/:userID', (req, res) => {
  const userId = req.params.userID;
  const queryText = `SELECT "games"."game", "user_games"."game_id" FROM "user"
    JOIN "user_games" ON "user"."id" = "user_games"."user_id"
    JOIN "games" ON "games"."id" = "user_games"."game_id"
    WHERE "user"."id" = $1;`;
  pool
    .query(queryText, [userId])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('userGames get request failed: ', err);
      res.sendStatus(500);
    });
});

// post selected games to DB
router.post('/', (req, res) => {
  pool
    .connect()
    .then(() => {
      for (let game of req.body) {
        const userId = game.user_id;
        const gameId = game.game_id;
        const queryText = `INSERT INTO "user_games" ("user_id", "game_id")
      Values ($1, $2)`
        pool.query(queryText, [userId, gameId]);
      }
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('post game request failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/userGame', (req, res) => {
  const userId = req.body.user_id;
  const gameId = req.body.game_id;
  const queryText = `INSERT INTO "user_games" ("user_id", "game_id")
      Values ($1, $2)`
  pool
    .query(queryText, [userId, gameId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('post userGame request failed: ', err);
      res.sendStatus(500);
    });
})


module.exports = router;