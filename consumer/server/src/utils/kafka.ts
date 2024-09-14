import {Kafka} from 'kafkajs';

const kafka = new Kafka({
 clientId:'my-app',
 brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS || 'localhost:9092']
});

export default kafka