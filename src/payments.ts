import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class BillingKey extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  public async preRegister(paymentId: string, data: Request.PreRegisterPayment) {
    return this.request<Response.PreRegisterPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/pre-register`,
      data,
    });
  }

  public async find(paymentId: string) {
    return this.request<Response.FindPayment>({
      method: 'GET',
      url: `/payments/${paymentId}`,
    });
  }

  public async findMany(data: Request.FindManyPayments) {
    return this.request<Response.FindManyPayments>({
      method: 'GET',
      url: '/payments',
      data,
    });
  }

  public async cancel(paymentId: string, data: Request.CancelPayment) {
    return this.request<Response.CancelPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/cancel`,
      data,
    });
  }

  public async payWithBillingKey(paymentId: string, data: Request.PayWithBillingKey) {
    return this.request<Response.PayWithBillingKey>({
      method: 'POST',
      url: `/payments/${paymentId}/billing-key`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async payInstant(paymentId: string, data: Request.PayInstant) {
    return this.request<Response.PayInstant>({
      method: 'POST',
      url: `/payments/${paymentId}/instant`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async closeVirtualAccount(paymentId: string, data: Request.CloseVirtualAccount) {
    return this.request<Response.CloseVirtualAccount>({
      method: 'POST',
      url: `/payments/${paymentId}/virtual-account/close`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async createEscrowLogistics(paymentId: string, data: Request.CreateEscrowLogistics) {
    return this.request<Response.CreateEscrowLogistics>({
      method: 'POST',
      url: `/payments/${paymentId}/escrow/logistics`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async updateEscrowLogistics(paymentId: string, data: Request.UpdateEscrowLogistics) {
    return this.request<Response.UpdateEscrowLogistics>({
      method: 'PATCH',
      url: `/payments/${paymentId}/escrow/logistics`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async completeEscrow(paymentId: string, data: Request.CompleteEscrow) {
    return this.request<Response.CompleteEscrow>({
      method: 'POST',
      url: `/payments/${paymentId}/escrow/complete`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async resendWebhook(paymentId: string, data: Request.ResendWebhook) {
    return this.request<Response.ResendWebhook>({
      method: 'POST',
      url: `/payments/${paymentId}/resend-webhook`,
      data,
    });
  }

  /** @todo NOT IMPLEMENTED */
  public async registerStoreReceipt(paymentId: string, data: Request.RegisterStoreReceipt) {
    return this.request<Response.RegisterStoreReceipt>({
      method: 'POST',
      url: `/payments/${paymentId}/store-receipt`,
      data,
    });
  }
}
