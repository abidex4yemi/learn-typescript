import 'reflect-metadata';
import { AppRouter } from '../../AppRouter';
import { Methods } from './Methods';
import { MetadataKeys } from './MetadataKeys';

export const router = AppRouter.getInstance();

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

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };
}
