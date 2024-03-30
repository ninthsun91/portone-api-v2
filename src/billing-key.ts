import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class BillingKey extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  public async find(billingKey: string) {
    return this.request<Response.FindBillingKey>({
      method: 'GET',
      url: `/billing-keys/${billingKey}`,
    });
  }

  public async issue(data: Request.IssueBillingKey) {
    return this.request<Response.IssueBillingKey>({
      method: 'POST',
      url: '/billing-keys',
      data,
    });
  }

  public async delete(billing_key: string) {
    return this.request<Response.DeleteBillingKey>({
      method: 'DELETE',
      url: `/billing-keys/${billing_key}`,
    });
  }
}
