import express from 'express';
import healthRouter from './routes/health';
import { logRequestsMiddleware } from './middlewares/logger';

const app = express();
app.use(express.json());

// Middlewares
app.use(logRequestsMiddleware);

// Routes
app.use('/api/health', healthRouter);

export default app;
