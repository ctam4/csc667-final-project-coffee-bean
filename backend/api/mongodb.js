const mongodb = require('mongodb').MongoClient;
const mongodbOptions = {
  host: process.env.MONGODB_HOST || 'localhost',
  port: process.env.MONGODB_PORT || '27017',
  db: process.env.MONGODB_DATABASE && '/' + process.env.MONGODB_DATABASE || '',
};

module.exports = new mongodb.connect('mongodb://' + mongodbOptions.host + ':' + mongodbOptions.port + mongodbOptions.db);
