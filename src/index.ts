import { PortOneClient, PortOneOptions } from './client';
import { PortOneRequest } from './request';
import { BillingKey } from './billing-key';
import { CashReceipt } from './cash-receipt';
import { Identity } from './identity';
import { KakaoPay } from './kakao-pay';
import { Payments } from './payments';
import { Schedules } from './schedule';

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
