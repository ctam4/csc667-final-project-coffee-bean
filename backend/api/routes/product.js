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
            .collection('products')
            .find({})
            .toArray(),
        ).end();
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

router.get('/:productId', async (req, res) => {
  const { productId } = req.param;
  const params = req.query;
  if (Object.keys(params).length === 0) {
    await mongodb
      .then(async ({ connection, db }) => {
        const product = await db
          .collection('products')
          .findOneAndUpdate(
            { productId },
            { $inc: { views: 1 } },
            { returnNewDocument: true },
          );
        if (product.ok === 1) {
          res.json(product.value).end();
        } else {
          res.sendStatus(400).end();
        }
      })
      .catch(() => res.sendStatus(500).end());
  } else {
    res.sendStatus(400).end();
  }
});

// for dummy data
router.post('/', async (req, res) => {
  const params = req.body;
  // validate params
  if (Object.keys(params).length === 3 && 'name' in params && 'price' in params && 'image' in params) {
    const { name } = params;
    const price = Number(params.price);
    const { image } = params;
    if (name.length > 0 && !Number.isNaN(price) && price >= 0.00 && image.length > 0) {
      await mongodb
        .then(async ({ connection, db }) => {
          const products = await db
            .collection('products')
            .insert({
              name,
              price,
              image,
              views: 0,
            });
          res.json({ _id: products.insertedIds }).end();
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
