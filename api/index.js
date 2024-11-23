import express from 'express';
import cors from 'cors';
import eventsRouter from './routes/events.js';
import spotsRouter from './routes/spots.js';
import logsRouter from './routes/logs.js';

const app = express();
const port = 3000;

// CORSの詳細設定
const corsOptions = {
  origin: 'http://localhost:5173', // Viteのデフォルトポート
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/events', eventsRouter);
app.use('/api/spots', spotsRouter);
app.use('/api/logs', logsRouter);

app.listen(port, () => {
  console.log(`API server running on port ${port}`);
});