export interface ServerToClientEvents {
    noArg: () => void;
    basicEmit: (b: string) => void;
    withAck: (d: string, callback: (e: number) => void) => void;
    message: (a:string)=>void;
  }
  
 export interface ClientToServerEvents {
    hello: () => void;
  }
  
export  interface InterServerEvents {
    ping: () => void;
  }
  
export  interface SocketData {
    store_id: number;
    customers_in: number;
    customers_out: number;
    time_stamp: string;
  }