import 'reflect-metadata';
import { RequestHandler, Request, Response, NextFunction } from 'express';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export const router = AppRouter.getInstance();

const bodyValidators = (keys: string[]): RequestHandler => {
  return function (req: Request, res: Response, next: NextFunction) {
    if (!req.body) {
      return res.status(422).send('Invalid request');
    }

    for (let key of keys) {
      if (!req.body[key]) {
        return res.status(422).send(`Missing property ${key}`);
      }
    }

    next();
  };
};

export function controller(routePrefix: string) {
  return function (target: Function): void {
    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];
      const path = Reflect.getMetadata(
        MetadataKeys.ROUTE_PATH,
        target.prototype,
        key
      );

      const method: Methods = Reflect.getMetadata(
        MetadataKeys.METHOD,
        target.prototype,
        key
      );

      const middlewares =
        Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target.prototype, key) ||
        [];

      const requiredBodyProps =
        Reflect.getMetadata(MetadataKeys.VALIDATOR, target.prototype, key) ||
        [];

      const validator = bodyValidators(requiredBodyProps);

      if (path) {
        router[method](
          `${routePrefix}${path}`,
          validator,
          ...middlewares,
          routeHandler
        );
      }
    }
  };
}
