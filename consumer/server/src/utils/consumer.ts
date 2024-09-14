import { Server } from "socket.io";
import kafka from "./kafka";
import { CustomerData } from "../models/data";
async function consume(io:Server) {
    const consumer = kafka.consumer({
        groupId: 'my-group',
      });
    
    try {
        await consumer.connect();
        console.log('Consumer connected');
        await consumer.subscribe({topic: 'customer-dashboard', fromBeginning: true});
        console.log('Consumer subscribed');
        await consumer.run({
            eachMessage: async ({ topic,partition,message }) => {
                console.log({
                    key: message.key!.toString(),
                    value: message.value!.toString(),
                });
                const {store_id, customers_in,customers_out,time_stamp} = JSON.parse(message.value!.toString())
                io.emit('basicEmit', {topic: topic, message: {store_id, customers_in, customers_out, time_stamp}});
                const data = new CustomerData({
                    store_id,
                    customers_in,
                    customers_out,
                    time_stamp,
                })
                await data.save();
                console.log('data saved');
                
            },
        })
        
    } catch (error) {
        console.error(error);
        
    }
}
export default consume
