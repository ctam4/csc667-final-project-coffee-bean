const express = require('express');

const router = express.Router();
const redis = require('../redis.js');
const kafka = require('../kafka.js');
const mongodb = require('../mongodb.js');

router.post('/login', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 1 && 'token' in params && params.token.length > 0) {
    await mongodb
      .then(async ({ connection, db }) => {
        // validate username/password pair
        const tokens = await db
          .collection('tokens')
          .find({ token: params.token });
        if (tokens.length === 1) {
          res.sendStatus(200).end();
        } else {
          res.sendStatus(406).end();
        }
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

router.post('/signup', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 2 && 'email' in params && params.email.length > 0 && 'password' in params && params.password.length > 0) {
    await mongodb
      .then(async ({ connection, db }) => {
        // TODO: check for duplicates
        await db
          .collection('tokens')
          .findOneAndUpdate(
            { email: params.email },
            { $set: { token: Buffer.from(`${params.email.toLowerCase()}:${params.password}`).toString('base64') } },
            { upsert: true },
          );
        res.sendStatus(200).end();
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

module.exports = router;
