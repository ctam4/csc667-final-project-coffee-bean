const mongodb = require('mongodb');

const mongodbOptions = {
  host: process.env.MONGODB_HOST || 'localhost',
  port: process.env.MONGODB_PORT || '27017',
  db: (process.env.MONGODB_DATABASE && `/${process.env.MONGODB_DATABASE}`) || '',
};

module.exports = (async () => {
  const connection = await new mongodb.MongoClient(`mongodb://${mongodbOptions.host}:${mongodbOptions.port}`, { useNewUrlParser: true }).connect();
  return {
    connection,
    db: connection.db(mongodbOptions.db),
  };
})();
