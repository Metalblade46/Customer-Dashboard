import { io,Socket } from 'socket.io-client';
interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (value:{topic:string, message:Message}) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
  }
  
  interface ClientToServerEvents {
    hello: () => void;
  }
  
  interface InterServerEvents {
    ping: () => void;
  }
  
 export interface Message {
    store_id: number;
    customers_in: number;
      customers_out: number;
      time_stamp: string;
  }
const URL = 'http://localhost:5000';

export const socket:Socket<ServerToClientEvents, ClientToServerEvents>= io(URL);