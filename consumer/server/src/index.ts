import express, {Express, Request, Response} from 'express'
import connectSocket from './utils/socket';
import { createServer } from 'http';
import cors from 'cors'
import consume from './utils/consumer';
import './utils/db'
import historyController from './controllers/historyController';

const app: Express = express()

const httpServer = createServer(app);


const io =  connectSocket(httpServer);
consume(io);
app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
    res.send('Hello from Express')
})

app.get('/history', historyController)

httpServer.listen(5000,()=>{
    console.log('Server is running on port 5000')
})