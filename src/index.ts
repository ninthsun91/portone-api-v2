import { BillingKey } from './billing-key';
import { PortOneClient, PortOneOptions } from './client';
import { Payments } from './payments';
import { PortOneRequest } from './request';
import { Schedules } from './schedule';

export class PortOne {
  declare public billingkey: BillingKey;
  declare public payments: Payments;
  declare public schedules: Schedules;

  constructor(options: PortOneOptions) {
    const client = new PortOneClient(options);

    const routes: (typeof PortOneRequest)[] = [
      BillingKey,
      Payments,
      Schedules,
    ];
    routes.forEach((route) => {
      // @ts-expect-error This is a dynamic property assignment
      this[route.name.toLowerCase()] = new route(client);
    });
  }
}
