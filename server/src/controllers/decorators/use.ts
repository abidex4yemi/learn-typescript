import 'reflect-metadata';
import { RequestHandler } from 'express';
import { MetadataKeys } from './MetadataKeys';

export function use(middleware: RequestHandler) {
  return function (target: any, key: string, desc: PropertyDescriptor): void {
    const middlewares =
      Reflect.getMetadata(MetadataKeys.MIDDLEWARE, target, key) || [];

    middlewares.push(middleware);

    Reflect.defineMetadata(MetadataKeys.MIDDLEWARE, middlewares, target, key);
  };
}
