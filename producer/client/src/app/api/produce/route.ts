import { NextRequest } from "next/server";
import produce from "./producer";

export async function POST(request: NextRequest){
    let res = await request.json();
    res = {
        store_id: parseInt(res.storeId),
        customers_in: parseInt(res.customers_in),
        customers_out: parseInt(res.customers_out),
    }
    console.log(res);
    await produce(res);
    return Response.json({ok: 'ok'})
}