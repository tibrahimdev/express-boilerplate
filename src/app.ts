import express from 'express';
import healthRouter from './routes/health';

const app = express();
app.use(express.json());

// Routes
app.use('/api/health', healthRouter)


export default app;
