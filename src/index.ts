import { PortOneClient, PortOneOptions } from './client';
import { PortOneRequest } from './request';
import {
  BillingKey,
  CashReceipt,
  Identity,
  KakaoPay,
  Payments,
  Schedules,
} from './apis';

export class PortOne {
  declare public billingkey: BillingKey;
  declare public cashreceipt: CashReceipt;
  declare public identity: Identity;
  declare public kakaopay: KakaoPay;
  declare public payments: Payments;
  declare public schedules: Schedules;

  constructor(options: PortOneOptions) {
    const client = new PortOneClient(options);

    const routes: (typeof PortOneRequest)[] = [
      BillingKey,
      CashReceipt,
      Identity,
      KakaoPay,
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
