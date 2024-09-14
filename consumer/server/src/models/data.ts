import { Schema, model} from 'mongoose'
import { SocketData } from '../types';

interface CustomerData extends SocketData{
    date: Date;
}

const customerDataScema = new Schema<CustomerData>({
    store_id: Number,
    customers_in: Number,
    customers_out: Number,
    time_stamp: String,
    date: { type: Date, default: new Date()},
})

export const CustomerData = model<CustomerData>('CustomerData', customerDataScema);