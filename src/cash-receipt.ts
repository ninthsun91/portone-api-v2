import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class CashReceipt extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 현금영수증 단건 조회
   * @param paymentId 결제 건 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async find(paymentId: string, storeId?: string) {
    return this.request<Response.FindCashReceipt>({
      method: 'GET',
      url: this.setQuery(`/payments/${paymentId}/cash-receipt`, { storeId }),
    });
  }

  /**
   * 현금영수증 발급 요청
   */
  public async issue(data: Request.IssueCashReceipt) {
    return this.request<Response.IssueCashReceipt>({
      method: 'POST',
      url: '/cash-receipts',
      data,
    });
  }

  /**
   * 현금영수증 취소 요청
   * @param paymentId 결제 건 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async cancel(paymentId: string, storeId?: string) {
    return this.request<Response.CancelCashReceipt>({
      method: 'POST',
      url: this.setQuery(`/payments/${paymentId}/cash-receipt/cancel`, { storeId }),
    });
  }
}
