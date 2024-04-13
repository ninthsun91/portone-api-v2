import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class BillingKey extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 빌링키 단건 조회
   * @param billingKey 조회할 빌링키
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async find(billingKey: string, storeId?: string) {
    return this.request<Response.FindBillingKey>({
      method: 'GET',
      url: this.setQuery(`/billing-keys/${billingKey}`, { storeId }),
    });
  }

  /**
   * 빌링키 발급
   */
  public async issue(data: Request.IssueBillingKey) {
    return this.request<Response.IssueBillingKey>({
      method: 'POST',
      url: '/billing-keys',
      data,
    });
  }

  /**
   * 빌링키 삭제
   * @param billingKey 삭제할 빌링키
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async delete(billingKey: string, storeId?: string) {
    return this.request<Response.DeleteBillingKey>({
      method: 'DELETE',
      url: this.setQuery(`/billing-keys/${billingKey}`, { storeId }),
    });
  }
}
