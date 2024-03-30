import { PortOneClient } from './client';
import { PortOneRequest } from './request';

export class PortOne {
  constructor(apiSecret: string) {
    const client = new PortOneClient({ apiSecret });

    const routes: (typeof PortOneRequest)[] = [];
    routes.forEach((route) => {
      // @ts-expect-error This is a dynamic property assignment
      this[route.name.toLowerCase()] = new route(client);
    });
  }
}
