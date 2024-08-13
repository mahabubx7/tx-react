/*
|--------------------------------------------------------------------------
| Kernel: Application root-level regitry manager
|
| @description
| This is the entry point of the application. It is responsible for
| bootstrapping the application and initializing all the necessary
| services and components.
|--------------------------------------------------------------------------
*/

import { RegisterRoutes } from '@/routes';
import * as swaggerJson from '@/swagger.json';
import {
  __dirname,
  corsOptions,
  globalErrHandler,
  notFound404Handler,
} from '@config';
import compression from 'compression';
import cors from 'cors';
import { Application, static as cdn, json, Router, urlencoded } from 'express';
import helmet from 'helmet';
import { resolve } from 'path';
import swaggerUiExpress from 'swagger-ui-express';
/*****************************************************************
 * DO NOT MODIFY THIS FILE IF YOU ARE NOT SURE WHAT YOU ARE DOING
 * This file is responsible for bootstrapping the application and
 * initializing all the necessary services and components.
 *****************************************************************/
const kernel = (app: Application) => {
  app.use(cors(corsOptions)); // <== enable cors

  // Security
  app.use(helmet());
  app.use(helmet.hidePoweredBy()); // <== hide 'X-Powered-By' header
  // app.use(helmet.noSniff()); // <== prevent browsers from MIME-sniffing a response away from the declared content-type
  // app.use(helmet.xssFilter()); // <== adds some small XSS protections

  app.use(json()); // <== enable json body parsing
  app.use(urlencoded({ extended: true })); // <== enable url-encoded body parsing
  app.use(cdn(resolve(__dirname, 'client'))); // <== serve static files
  app.use(compression()); // <== enable gzip compression

  /// DO NOT ALTER THE ORDER OF THE FOLLOWING MIDDLEWARES ///
  const apiRouter = Router();
  RegisterRoutes(apiRouter); // <== register all routes
  app.use('/api', apiRouter); // <== mount api routes
  app.use('/api/*', notFound404Handler); // <== global 404 handler
  app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson)); // <== serve swagger docs
  // React SPA client router reload supports
  app.use('*', (_, res) => {
    res.sendFile(resolve(__dirname, 'client/index.html'), {
      headers: {
        'Content-Type': 'text/html',
      },
    });
  }); // <== serve the frontend client SPA router
  app.use(globalErrHandler); // <== global error handler
};

export { kernel };
