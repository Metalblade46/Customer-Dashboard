import convertToIST from "@/lib/time";
import { Kafka } from "kafkajs";

const produce = async (data: {
    store_id: number;
  customers_in: number;
  customers_out: number;
}) => {
  const kafka = new Kafka({
    clientId: "test-producer",
    brokers: [process.env.KAFKA_BOOTSTRAP_SERVERS || "localhost:9092"],
  });
  const admin = kafka.admin();
  try {
    await admin.connect();
    if ((await admin.listTopics()).findIndex((topic) => topic) == -1) {
      console.log("Topic not found. Creating new topic...");
      await admin.createTopics({
        topics: [
          {
            topic: "customer-dashboard",
            numPartitions: 1,
            replicationFactor: 1,
          },
        ],
      });
      console.log("Topic created successfully.");
    }
    const producer = kafka.producer();
    await producer.connect();
    const date = convertToIST(new Date(),5,30);
    const getTimeStamp = () => {
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours < 10 ? "0" : ""}${hours}:${
            minutes < 10 ? "0" : ""
        }${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
    };
    await producer.send({
        topic: "customer-dashboard",
        messages: [
            {
                key: "key1",
                value: JSON.stringify({
                    ...data,
                    time_stamp: getTimeStamp(),
                }),
            },
        ],
    });
    await admin.disconnect();
    await producer.disconnect();
  } catch (err) {
    console.log(err);
  }
};
export default produce;
