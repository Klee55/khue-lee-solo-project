const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // console.log('fetchDay get request made');
    const queryText = `SELECT * FROM "days";`;
    pool
        .query(queryText)
        .then((results) => res.send(results.rows))
        .catch((err) => {
            console.log('fetchDay get request failed:', err);
        });
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
    // POST route code here
});

module.exports = router;