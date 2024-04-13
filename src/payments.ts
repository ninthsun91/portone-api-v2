import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class Payments extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 결제 정보 사전 등록
   * @param paymentId 결제 건 ID
   */
  public async preRegister(paymentId: string, data: Request.PreRegisterPayment) {
    return this.request<Response.PreRegisterPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/pre-register`,
      data,
    });
  }

  /**
   * 결제 단건 조회
   * @param paymentId 조회할 결제 ID
   * @param storeId (Optional) 상점 ID. 미입력시 토큰 내 상점 ID 사용
   */
  public async find(paymentId: string, storeId?: string) {
    return this.request<Response.FindPayment>({
      method: 'GET',
      url: this.setQuery(`/payments/${paymentId}`, { storeId }),
    });
  }

  /**
   * 결제 다건 조회(페이지 기반)
   */
  public async findMany(data: Request.FindManyPayments) {
    return this.request<Response.FindManyPayments>({
      method: 'GET',
      url: '/payments',
      data,
    });
  }

  /**
   * 결제 취소
   * @param paymentId 결제 건 ID
   */
  public async cancel(paymentId: string, data: Request.CancelPayment) {
    return this.request<Response.CancelPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/cancel`,
      data,
    });
  }

  /**
   * 빌링키 결제
   * @param paymentId 결제 건 ID
   */
  public async payWithBillingKey(paymentId: string, data: Request.PayWithBillingKey) {
    return this.request<Response.PayWithBillingKey>({
      method: 'POST',
      url: `/payments/${paymentId}/billing-key`,
      data,
    });
  }

  /**
   * 수기 결제
   * @param paymentId 결제 건 ID
   */
  public async payInstant(paymentId: string, data: Request.PayInstant) {
    return this.request<Response.PayInstant>({
      method: 'POST',
      url: `/payments/${paymentId}/instant`,
      data,
    });
  }

  /**
   * 가상계좌 말소
   * @param paymentId 결제 건 ID
   * @param storeId (Optional) 상점 ID. 미입력시 토큰 내 상점 ID 사용
   */
  public async closeVirtualAccount(paymentId: string, storeId?: string) {
    return this.request<Response.CloseVirtualAccount>({
      method: 'POST',
      url: this.setQuery(`/payments/${paymentId}/virtual-account/close`, { storeId }),
    });
  }

  /**
   * 에스크로 배송 정보 등록
   * @param paymentId 결제 건 ID
   */
  public async createEscrowLogistics(paymentId: string, data: Request.CreateEscrowLogistics) {
    return this.request<Response.CreateEscrowLogistics>({
      method: 'POST',
      url: `/payments/${paymentId}/escrow/logistics`,
      data,
    });
  }

  /**
   * 에스크로 배송 정보 수정
   * @param paymentId 결제 건 ID
   */
  public async updateEscrowLogistics(paymentId: string, data: Request.UpdateEscrowLogistics) {
    return this.request<Response.UpdateEscrowLogistics>({
      method: 'PATCH',
      url: `/payments/${paymentId}/escrow/logistics`,
      data,
    });
  }

  /**
   * 에스크로 구매 확정
   * @param paymentId 결제 건 ID
   */
  public async completeEscrow(paymentId: string, data: Request.CompleteEscrow) {
    return this.request<Response.CompleteEscrow>({
      method: 'POST',
      url: `/payments/${paymentId}/escrow/complete`,
      data,
    });
  }

  /**
   * 웹훅 재발송
   * @param paymentId 결제 건 ID
   */
  public async resendWebhook(paymentId: string, data: Request.ResendWebhook) {
    return this.request<Response.ResendWebhook>({
      method: 'POST',
      url: `/payments/${paymentId}/resend-webhook`,
      data,
    });
  }

  /**
   * 영수증 내 하위 상점 거래 등록. 지원되는 PG사: KG이니시스(이용 전 콘솔>결제연동에서 INIApi Key 등록 필요)
   * @param paymentId 등록할 하위 상점 결제 건 ID
   */
  public async registerStoreReceipt(paymentId: string, data: Request.RegisterStoreReceipt) {
    return this.request<Response.RegisterStoreReceipt>({
      method: 'POST',
      url: `/payments/${paymentId}/store-receipt`,
      data,
    });
  }
}
