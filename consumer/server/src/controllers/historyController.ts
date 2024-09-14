import { Request,Response } from "express";
import { CustomerData } from "../models/data";

const historyController = async (req:Request, res:Response)=>{
    const data = await CustomerData.find({
        date: {$gte: new Date(Date.now()-24*60*60*1000)}
    }, 'store_id customers_in customers_out').exec();
    res.json(data);
}
export default historyController;