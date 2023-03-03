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

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;