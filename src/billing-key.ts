import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class BillingKey extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  public async find(billingKey: string, storeId?: string) {
    return this.request<Response.FindBillingKey>({
      method: 'GET',
      url: this.setQuery(`/billing-keys/${billingKey}`, { storeId }),
    });
  }

  public async issue(data: Request.IssueBillingKey) {
    return this.request<Response.IssueBillingKey>({
      method: 'POST',
      url: '/billing-keys',
      data,
    });
  }

  public async delete(billing_key: string, storeId?: string) {
    return this.request<Response.DeleteBillingKey>({
      method: 'DELETE',
      url: this.setQuery(`/billing-keys/${billing_key}`, { storeId }),
    });
  }
}
