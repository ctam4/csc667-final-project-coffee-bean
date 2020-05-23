const express = require('express');

const router = express.Router();
const redis = require('../redis.js');
const kafka = require('../kafka.js');
const mongodb = require('../mongodb.js');

router.post('/login', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 1 && 'token' in params) {
    const { token } = params;
    if (token.length > 0) {
      await mongodb
        .then(async ({ connection, db }) => {
          // validate username/password pair
          const tokens = await db
            .collection('tokens')
            .countDocuments({ token });
          if (tokens === 1) {
            res.sendStatus(200).end();
          } else {
            res.sendStatus(406).end();
          }
        })
        .catch(() => res.sendStatus(500).end());
    } else {
      res.sendStatus(400).end();
    }
  } else {
    res.sendStatus(400).end();
  }
});

router.post('/signup', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 3 && 'email' in params && 'password' in params && 'role' in params) {
    const { email, password, role } = params;
    if (email.length > 0 && password.length > 0) {
      await mongodb
        .then(async ({ connection, db }) => {
          // TODO: check for duplicates
          await db
            .collection('tokens')
            .findOneAndUpdate(
              { email: email.toLowerCase() },
              {
                $set: {
                  token: Buffer.from(`${email.toLowerCase()}:${password}`).toString('base64'),
                  role,
                },
              },
              { upsert: true },
            );
          res.sendStatus(200).end();
        })
        .catch(() => res.sendStatus(500).end());
    } else {
      res.sendStatus(400).end();
    }
  } else {
    res.sendStatus(400).end();
  }
});

router.get('/', async (req, res) => {
  const params = req.query;
  // validate params
  if (Object.keys(params).length === 1 && 'token' in params) {
    const { token } = params;
    if (token.length > 0) {
      // TODO: redis
      await mongodb
        .then(async ({ connection, db }) => {
          res.json(
            await db
              .collection('tokens')
              .findOne(
                { token },
                {
                  _id: 0,
                  email: 0,
                  token: 0,
                  role: 1,
                },
              ),
          ).end();
        })
        .catch(() => res.sendStatus(500).end());
    } else {
      res.sendStatus(400).end();
    }
  }
});

module.exports = router;
