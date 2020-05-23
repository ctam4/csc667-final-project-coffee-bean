const redis = require('async-redis');

const redisOptions = {
  host: process.env.REDIS_HOST || '127.0.0.1',
  port: process.env.REDIS_PORT || '6379',
};

module.exports = redis.createClient(redisOptions);
