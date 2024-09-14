import {Server} from 'socket.io'
import { Server as httpServer } from 'http';
import { ClientToServerEvents, ServerToClientEvents, InterServerEvents, SocketData} from '../types'
import consume from './consumer';
const connectSocket = (server:httpServer) => {
    const io = new Server<
  ClientToServerEvents,
  ServerToClientEvents,
  InterServerEvents,
  SocketData
>(server, { cors: { origin: '*' } });
io.on('connection',socket=>{
    console.log('Socket connection',socket.id);
})
return io;
}
export default connectSocket;
