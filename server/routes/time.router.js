const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// fetch all user's times from DB
router.get('/profile/:userId', (req, res) => {
    const userId = req.params.userId;
    const queryText = `SELECT "times"."day", "times"."id", "times"."start_time", "times"."end_time" FROM "user"
    JOIN "times" ON "user"."id" = "times"."user_id"
    WHERE "user"."id" = $1;`;
    pool
        .query(queryText, [userId])
        .then((results) => { res.send(results.rows) })
        .catch((error) => {
            console.log('error with userTime get request:', error);
            res.sendStatus(500);
        })
});

// register times input from registration form into DB
router.post('/', (req, res) => {
    pool
        .connect()
        .then(() => {
            for (let time of req.body) {
                const day = time.day
                const startTime = time.startTime;
                const endTime = time.endTime;
                const userId = time.user_id;
                const queryText = `INSERT INTO "times" ("day", "start_time", "end_time", "user_id")
                    Values ($1, $2, $3, $4)`
                pool.query(queryText, [day, startTime, endTime, userId]);
            }
        })
        .then(() => res.sendStatus(201))
        .catch((err) => {
            console.log('time post request failed: ', err);
            res.sendStatus(500);
        });
});

// insert selected time in edit form into DB
router.post('/userTime', (req, res) => {
    console.log('post userTime request made:', req.body);
    console.log(req.body);
    const userId = req.body.user_id;
    const day = req.body.day;
    const startTime = req.body.startTime;
    const endTme = req.body.endTime;
    const queryText = `INSERT INTO "times" ("day", "start_time", "end_time", "user_id")
            VALUES ($1, $2, $3, $4);`;
    pool
        .query(queryText, [day, startTime, endTme, userId])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log('userTime post quest failed:', err);
        });
})

// delete time from DB
router.delete('/:timeId', (req, res) => {
    console.log('delete time request made:', req.params);
    const timeId = req.params.timeId;
    const queryText = `DELETE FROM "times" WHERE "times"."id" = $1`
    pool
        .query(queryText, [timeId])
        .then(() => res.sendStatus(200))
        .catch((err) => {
            console.log('delete time request failed:', err);
        });
});

module.exports = router;