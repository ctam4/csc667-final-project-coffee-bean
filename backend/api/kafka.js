const kafka = require('kafkajs');
const kafkaOptions = {
  brokers: [((process.env.KAFKA_HOST && process.env.KAFKA_PORT) && process.env.KAFKA_HOST + ':' + process.env.KAFKA_PORT) || '127.0.0.1:6379']
};

module.exports = new kafka.Kafka(kafkaOptions);
