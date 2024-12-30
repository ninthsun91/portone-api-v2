import { PortOneClient, PortOneOptions } from './client';
import { PortOneRequest } from './request';
import {
  BillingKey,
  CashReceipt,
  IdentityVerification,
  KakaoPay,
  Payments,
  Promotions,
  Schedules,
} from './apis';

export class PortOne {
  declare public billingKey: BillingKey;
  declare public cashReceipt: CashReceipt;
  declare public identityVerification: IdentityVerification;
  declare public kakaoPay: KakaoPay;
  declare public payments: Payments;
  declare public promotions: Promotions;
  declare public schedules: Schedules;

  constructor(options: PortOneOptions) {
    const client = new PortOneClient(options);

    const routes: (typeof PortOneRequest)[] = [
      BillingKey,
      CashReceipt,
      IdentityVerification,
      KakaoPay,
      Payments,
      Promotions,
      Schedules,
    ];
    routes.forEach((route) => {
      const routeName = route.name.charAt(0).toLowerCase() + route.name.slice(1);
      // @ts-expect-error This is a dynamic property assignment
      this[routeName] = new route(client);
    });
  }
}

export * from './types';
