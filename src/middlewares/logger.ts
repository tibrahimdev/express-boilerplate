// import pinoHttp from 'pino-http';
// import pino from 'pino';
// import { Request, Response } from 'express';

//

// let transport: pino.TransportMultiOptions | undefined = undefined;

// const logger = pinoHttp({
//   transport,
//   customLogLevel(res: Response, err) {
//     if (res.statusCode >= 500 || err) return 'error';
//     if (res.statusCode >= 400) return 'warn';
//     return 'info';
//   },
//   serializers: {
//     req(req: Request) {
//       return {
//         method: req.method,
//         url: req.url,
//         headers: env !== 'production' ? req.headers : undefined, // mask in production
//       };
//     },
//     res(res: Response) {
//       return {
//         statusCode: res.statusCode,
//       };
//     },
//   },
// });

// export default logger;

import pino from 'pino';
import pinoHttp from 'pino-http';

const env = process.env.NODE_ENV || 'development';

let transport;

if (env === 'development' || env === 'local') {
  transport = {
    targets: [
      // { target: 'pino-pretty' }
    ],
    options: {
      colorize: true,
      translateTime: 'SYS:standard',
      ignore: 'pid,hostname',
    },
  };
}

const log = pino<never>({
  customLevels: {
    metric: 25,
  },
  transport,
});

export const logRequestsMiddleware = pinoHttp({
  logger: log,
});
