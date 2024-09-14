"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Message, socket } from "../socket";
import LiveTable from "../components/LiveTable";
import HistoryTable from "@/components/HistoryTable";

export interface History{
  storeId : number;
  customerIn : number;
  customerOut : number;
}

export default function Home() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [history, setHistory] = useState<History[]>([]);
  useEffect(() => {
    const onMessage = (value: { topic: string; message: Message }) => {
      setMessages((prevMessages) => [value.message, ...prevMessages]);
    };

    socket.on("basicEmit", onMessage);
    return () => {
      socket.off("basicEmit", onMessage);
    };
  });
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const response = await fetch("http://localhost:5000/history");
        const data:{store_id:number, customers_in: number, customers_out: number}[] = await response.json();
        const historyData:History[] = [];
        const results = Object.groupBy(data,d=>d!.store_id);
        for (const [key, value] of Object.entries(results)) {
          historyData.push({
            storeId: parseInt(key),
            customerIn: value!.reduce((acc,item) => acc+item.customers_in, 0),
            customerOut: value!.reduce((acc,item) => acc+item.customers_out, 0),
          });
        }
        setHistory(historyData);
        
      } catch (error) {
        console.error(error);
      }
    };
    fetchHistory();
  },[messages]);
  return (
    <>
      <div className="w-full flex flex-col gap-8 items-center p-4 justify-center">
        <h1 className="font-bold text-2xl">Customer Dashboard</h1>
        <LiveTable data={messages} type={"Live"} />
        <HistoryTable type="History" data={history}/>
      </div>
    </>
  );
}
