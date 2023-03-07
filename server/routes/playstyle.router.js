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

module.exports = router;