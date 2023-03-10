const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


router.get('/', (req, res) => {
  console.log('fetch playstyles request made');
  pool
    .query('SELECT * FROM "playstyles";')
    .then((results) => res.send(results.rows))
    .catch((error) => {
      console.log('Error fetching playstyles:', error);
      res.sendStatus(500);
    });
});

// get all user's playstyles in DB
router.get('/profile/:userId', (req, res) => {
  const userId = req.params.userId
  const queryText = `SELECT "playstyles"."style", "user_playstyles"."playstyle_id" FROM "user"
  JOIN "user_playstyles" ON "user"."id" = "user_playstyles"."user_id"
  JOIN "playstyles" ON "playstyles"."id" = "user_playstyles"."playstyle_id"
  WHERE "user"."id" = $1;`;
  pool
    .query(queryText, [userId])
    .then((results) => res.send(results.rows))
    .catch((err) => {
      console.log('userPlaystyles get request failed: ', err);
      res.sendStatus(500);
    });
})

router.post('/', (req, res) => {
  pool
    .connect()
    .then(() => {
      for (let playstyle of req.body) {
        const userId = playstyle.user_id;
        const playstyleId = playstyle.playstyle_id;
        const queryText = `INSERT INTO "user_playstyles" ("user_id", "playstyle_id")
            Values ($1, $2)`
        pool.query(queryText, [userId, playstyleId]);
      }
    })
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('playstyle post request failed: ', err);
      res.sendStatus(500);
    });
});

router.post('/userPlaystyle', (req, res) => {
  console.log('post userPlaystyle request made', req.body);
  const userId = req.body.user_id;
  const playstyleId = req.body.playstyle_id;
  const queryText = `INSERT INTO "user_playstyles" ("user_id", "playstyle_id")
    VALUES ($1, $2)`;
  pool
    .query(queryText, [userId, playstyleId])
    .then(() => res.sendStatus(201))
    .catch((err) => {
      console.log('post userPlaystyle request failed: ', err);
      res.sendStatus(500);
    });
})


module.exports = router;