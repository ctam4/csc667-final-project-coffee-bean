const mongodb = require('mongodb');
const mongodbOptions = {
  host: process.env.MONGODB_HOST || 'localhost',
  port: process.env.MONGODB_PORT || '27017',
  db: (process.env.MONGODB_DATABASE && '/') || '',
};

module.exports = mongodb.MongoClient.connect('mongodb://' + mongodbOptions.host + ':' + mongodbOptions.port + mongodbOptions.db);
