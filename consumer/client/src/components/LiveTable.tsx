import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Message } from "@/socket";
import { ScrollArea } from "./ui/scroll-area";

const LiveTable = ({ type, data }: { type: string; data: Message[] }) => {
  return (
    <div className="w-1/2 mt-6 shadow-gray-300 shadow-sm rounded-sm p-4">
      <h2 className="font-semibold text-center mb-4">{type} Table for Today</h2>
          
      <ScrollArea className=" h-[200px] rounded-md ">   
      <Table>
        <TableCaption>
          {data.length
            ? "A live view of your customers entering and leaving store."
            : "No Customers Now!"}
        </TableCaption>
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="text-left">Time Stamp</TableHead>
            <TableHead className="text-left">Store No.</TableHead>
            <TableHead>Arrival</TableHead>
            <TableHead className="text-right">Departure</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((message, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium pl-5">
                {message.time_stamp}
              </TableCell>
              <TableCell className="text-left pl-8">{message.store_id}</TableCell>
              <TableCell className="text-left pl-6">{message.customers_in}</TableCell>
              <TableCell className="text-right pr-8">
                {message.customers_out}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
        </ScrollArea>
      
        
    </div>
 
  );
};

export default LiveTable;
