const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/', (req, res) => {
    // GET route code here
});

/**
 * POST route template
 */
router.post('/', (req, res) => {

    pool
        .connect()
        .then(() => {
            for (let time of req.body) {
                const startTime = time.startTime;
                const endTime = time.endTime;
                const userId = time.user_id;
                const queryText = `INSERT INTO "times" ("start_time", "end_time", "user_id")
                    Values ($1, $2, $3)`
                pool.query(queryText, [startTime, endTime, userId]);
            }
        })
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('time post request failed: ', err);
            res.sendStatus(500);
        });
});

module.exports = router;