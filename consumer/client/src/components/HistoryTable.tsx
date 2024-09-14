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
import { History } from "@/app/page";

const LiveTable = ({ type, data }: { type: string; data: History[] }) => {
  return (
    <div className="w-1/2 mt-6 shadow-gray-300 shadow-sm rounded-sm p-4">
      <h2 className="font-semibold text-center mb-4">{type} Table</h2>
          
      <ScrollArea className=" h-[200px] rounded-md ">   
      <Table className="text-center">
        <TableCaption>
          {data.length
            ? "A historical view of your customers entering and leaving stores per hour in the last 24 hours."
            : "No Customers in the past 24 hours!"}
        </TableCaption>
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="text-center">Store No.</TableHead>
            <TableHead className="text-center">Total Arrivals</TableHead>
            <TableHead className="text-center">Arrivals per Hour</TableHead>
            <TableHead className="text-center">Total Departures</TableHead>
            <TableHead className="text-right">Departures per hour</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((datum, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-left pl-10">
                {datum.storeId}
              </TableCell>
              <TableCell className="text-center">{datum.customerIn}</TableCell>
              <TableCell className="text-center">{(Math.round(datum.customerIn/24*100)/100).toFixed(2)}</TableCell>
              <TableCell className="text-center">
                {datum.customerOut}
              </TableCell>
              <TableCell className="text-right pr-8">
              {(Math.round(datum.customerOut/24*100)/100).toFixed(2)}
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
