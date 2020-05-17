const express = require('express');

const router = express.Router();
const redis = require('../redis.js');
const kafka = require('../kafka.js');
const mongodb = require('../mongodb.js');

router.get('/', async (req, res) => {
  const params = req.query;
  // validate params
  if (Object.keys(params).length === 0) {
    // TODO: redis
    await mongodb
      .then(async ({ connection, db }) => {
        res.json(
          await db
            .collection('inventory')
            .find({})
            .toArray(),
        ).end();
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

router.post('/', async (req, res) => {
  // @todo: validate user
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 2 && 'quantity' in params && 'productId' in params) {
    const quantity = Number(params.quantity);
    const { productId } = params;
    if (!Number.isNaN(quantity) && productId.length > 0) {
      // check existing inventory
      await mongodb
        .then(async ({ connection, db }) => {
          const inventory = await db
            .collection('inventory')
            .find({ productId })
            .toArray();
          if (inventory.length === 0) {
            await db
              .collection('inventory')
              .insert({
                quantity,
                productId,
              });
          } else {
            await db
              .collection('inventory')
              .findOneAndUpdate(
                { productId },
                { $set: { quantity: products[0].quantity + quantity } },
                { upsert: true },
              );
          }
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

module.exports = router;
