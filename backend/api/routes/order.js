const express = require('express');

const router = express.Router();
const redis = require('../redis.js');
const kafka = require('../kafka.js');
const mongodb = require('../mongodb.js');
const { transporter, fromEmail } = require('../nodemailer.js');

async function sendReceipt(items, receiptID, toEmail) {
  const newItems = items.join('\n');
  await transporter.sendMail({
    from: fromEmail,
    to: toEmail,
    subject: 'Receipt info',
    text: `You bought: \n${newItems}\nand your receipt ID is${receiptID}`,
  });
}

router.use(async (req, res, next) => {
  let params;
  switch (req.method) {
    case 'GET':
      params = req.query;
      break;
    case 'POST':
      params = req.body;
      break;
  }
  if (Object.keys(params).length >= 1 && 'token' in params) {
    const { token } = params;
    if (token.length > 0) {
      await mongodb
        .then(async ({ connection, db }) => {
          const tokens = await db
            .collection('tokens')
            .countDocuments({ token });
          if (tokens === 1) {
            next();
          } else {
            res.sendStatus(401).end();
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

router.get('/', async (req, res) => {
  const params = req.query;
  // validate params
  if (Object.keys(params).length === 1) {
    const { token } = params;
    // TODO: redis
    // decode base64 token to two items
    const decoded = Buffer.from(token, 'base64').toString().split(':');
    await mongodb
      .then(async ({ connection, db }) => {
        res.json(
          await db
            .collection('orders')
            .find({ email: decoded[0] })
            .toArray(),
        ).end();
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

router.post('/', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 2 && 'items' in params) {
    const { token } = params;
    const { items } = params;
    if (Array.isArray(items)) {
      // decode base64 token to two items
      const decoded = Buffer.from(token, 'base64').toString().split(':');
      await mongodb
        .then(async ({ connection, db }) => {
          const orders = await db
            .collection('orders')
            .insert({
              email: decoded[0],
              items,
            });
          sendReceipt(items, orders.insertedIds[0], decoded[0]);
          res.json({ _id: orders.insertedIds[0] }).end();
        })
        .catch(() => res.sendStatus(500).end());
    } else {
      res.sendStatus(400).end();
    }
  } else {
    res.sendStatus(400).end();
  }
});

module.exports = router;
