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
import { corsOptions, globalErrHandler, notFound404Handler } from '@config';
import compression from 'compression';
import cors from 'cors';
import { Application, json, urlencoded } from 'express';
import helmet from 'helmet';
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
  app.use(helmet.noSniff()); // <== prevent browsers from MIME-sniffing a response away from the declared content-type
  app.use(helmet.xssFilter()); // <== adds some small XSS protections

  app.use(json()); // <== enable json body parsing
  app.use(urlencoded({ extended: true })); // <== enable url-encoded body parsing
  app.use(compression()); // <== enable gzip compression

  /// DO NOT ALTER THE ORDER OF THE FOLLOWING MIDDLEWARES ///
  RegisterRoutes(app); // <== register all routes
  app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(swaggerJson)); // <== serve swagger docs
  app.use('*', notFound404Handler); // <== global 404 handler
  app.use(globalErrHandler); // <== global error handler
};

export { kernel };
