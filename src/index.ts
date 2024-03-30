import { BillingKey } from './billing-key';
import { PortOneClient, PortOneOptions } from './client';
import { PortOneRequest } from './request';

export class PortOne {
  declare public billingkey: BillingKey;

  constructor(options: PortOneOptions) {
    const client = new PortOneClient(options);

    const routes: (typeof PortOneRequest)[] = [
      BillingKey,
    ];
    routes.forEach((route) => {
      // @ts-expect-error This is a dynamic property assignment
      this[route.name.toLowerCase()] = new route(client);
    });
  }
}

export * from './types';
