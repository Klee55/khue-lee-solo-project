const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
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

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;