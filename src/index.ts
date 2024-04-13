import { PortOneClient, PortOneOptions } from './client';
import { PortOneRequest } from './request';
import { BillingKey } from './billing-key';
import { CashReceipt } from './cash-receipt';
import { Payments } from './payments';
import { Schedules } from './schedule';

export class PortOne {
  declare public billingkey: BillingKey;
  declare public cashreceipt: CashReceipt;
  declare public payments: Payments;
  declare public schedules: Schedules;

  constructor(options: PortOneOptions) {
    const client = new PortOneClient(options);

    const routes: (typeof PortOneRequest)[] = [
      BillingKey,
      CashReceipt,
      Payments,
      Schedules,
    ];
    routes.forEach((route) => {
      // @ts-expect-error This is a dynamic property assignment
      this[route.name.toLowerCase()] = new route(client);
    });
  }
}

export * from './types';
