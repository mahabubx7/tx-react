import { CorsOptions } from 'cors';

export const corsOptions: CorsOptions = {
  origin: ['*'], // change as you see fit i.e. ['https://example.com']
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS', 'HEAD'],
  allowedHeaders: ['Content-Type', 'Authorization'], // add more if needed
  credentials: true,
  optionsSuccessStatus: 204,
};
