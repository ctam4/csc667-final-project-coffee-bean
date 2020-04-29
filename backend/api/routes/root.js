const express = require('express');
const router = express.Router();

/*
const redis = require('../redis.js');
const kafka = require('../kafka.js');
const mongodb = require('../mongodb.js');
*/

router.get('/', (req, res) => res.send('Hello World!'));

module.exports = router;
