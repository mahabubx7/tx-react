import pino from 'pino';
import pinoHttpLogger from 'pino-http';

export const logger = pino({
  level: 'info',
  transport: {
    options: { colorize: true },
    target: 'pino-pretty',
  },
}); // <== Logger instance

export const httpLogger = pinoHttpLogger({
  useLevel: 'info',
  logger: pino(),
  quietReqLogger: true,
  transport: {
    target: 'pino-http-print', // use the pino-http-print transport and its formatting output
    options: {
      destination: 1,
      colorize: true,
      all: false, // boolean to print all logs
      translateTime: true,
    },
  },
}); // <== HTTP Logger instance
