// routes/health.ts
import { Router } from 'express';
import { HealthCheckResponse } from '../models/shared';


const healthRouter = Router();

healthRouter.get('/', (_req, res) => {
  const response: HealthCheckResponse = {
    status: 'ok',
    uptime: process.uptime(),
    timestamp: Date.now()
  };

  res.status(200).json(response);
});

export default healthRouter;
