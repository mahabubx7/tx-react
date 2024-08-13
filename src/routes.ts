/* tslint:disable */
/* eslint-disable */
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import {
  TsoaRoute,
  fetchMiddlewares,
  ExpressTemplateService,
} from '@tsoa/runtime';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { HelloController } from './app/hello.controller';
// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
import { TodoController } from './app/todo/todo.controller';
import type {
  Request as ExRequest,
  Response as ExResponse,
  RequestHandler,
  Router,
} from 'express';

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

const models: TsoaRoute.Models = {
  Todo: {
    dataType: 'refObject',
    properties: {
      _id: { dataType: 'string', required: true },
      title: { dataType: 'string', required: true },
      completed: { dataType: 'boolean', required: true },
      createdAt: { dataType: 'string', required: true },
      updatedAt: { dataType: 'string', required: true },
      __v: {
        dataType: 'union',
        subSchemas: [{ dataType: 'string' }, { dataType: 'double' }],
      },
    },
    additionalProperties: false,
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  CreateTodoDto: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        completed: { dataType: 'boolean' },
        title: { dataType: 'string', required: true },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  Partial_CreateTodoDto_: {
    dataType: 'refAlias',
    type: {
      dataType: 'nestedObjectLiteral',
      nestedProperties: {
        title: { dataType: 'string' },
        completed: { dataType: 'boolean' },
      },
      validators: {},
    },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  UpdateTodoDto: {
    dataType: 'refAlias',
    type: { ref: 'Partial_CreateTodoDto_', validators: {} },
  },
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
};
const templateService = new ExpressTemplateService(models, {
  noImplicitAdditionalProperties: 'throw-on-extras',
  bodyCoercion: true,
});

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

export function RegisterRoutes(app: Router) {
  // ###########################################################################################################
  //  NOTE: If you do not see routes for all of your controllers in this file, then you might not have informed tsoa of where to look
  //      Please look into the "controllerPathGlobs" config option described in the readme: https://github.com/lukeautry/tsoa
  // ###########################################################################################################

  app.get(
    '/hello',
    ...fetchMiddlewares<RequestHandler>(HelloController),
    ...fetchMiddlewares<RequestHandler>(HelloController.prototype.getMessage),

    async function HelloController_getMessage(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new HelloController();

        await templateService.apiHandler({
          methodName: 'getMessage',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/hello/greet',
    ...fetchMiddlewares<RequestHandler>(HelloController),
    ...fetchMiddlewares<RequestHandler>(HelloController.prototype.greet),

    async function HelloController_greet(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new HelloController();

        await templateService.apiHandler({
          methodName: 'greet',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/todo',
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.getTodos),

    async function TodoController_getTodos(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {};

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: 'getTodos',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.get(
    '/todo/:id',
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.getTodoById),

    async function TodoController_getTodoById(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        todoId: { in: 'path', name: 'id', required: true, dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: 'getTodoById',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.post(
    '/todo',
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.addTodo),

    async function TodoController_addTodo(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        todo: {
          in: 'body',
          name: 'todo',
          required: true,
          ref: 'CreateTodoDto',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: 'addTodo',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.put(
    '/todo/:id',
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.updateTodo),

    async function TodoController_updateTodo(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        todoId: { in: 'path', name: 'id', required: true, dataType: 'string' },
        todo: {
          in: 'body',
          name: 'todo',
          required: true,
          ref: 'UpdateTodoDto',
        },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: 'updateTodo',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
  app.delete(
    '/todo/:id',
    ...fetchMiddlewares<RequestHandler>(TodoController),
    ...fetchMiddlewares<RequestHandler>(TodoController.prototype.deleteTodo),

    async function TodoController_deleteTodo(
      request: ExRequest,
      response: ExResponse,
      next: any,
    ) {
      const args: Record<string, TsoaRoute.ParameterSchema> = {
        todoId: { in: 'path', name: 'id', required: true, dataType: 'string' },
      };

      // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

      let validatedArgs: any[] = [];
      try {
        validatedArgs = templateService.getValidatedArgs({
          args,
          request,
          response,
        });

        const controller = new TodoController();

        await templateService.apiHandler({
          methodName: 'deleteTodo',
          controller,
          response,
          next,
          validatedArgs,
          successStatus: undefined,
        });
      } catch (err) {
        return next(err);
      }
    },
  );
  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa

  // WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
}

// WARNING: This file was auto-generated with tsoa. Please do not modify it. Re-run tsoa to re-generate this file: https://github.com/lukeautry/tsoa
