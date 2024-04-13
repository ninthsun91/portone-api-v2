import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class KakaoPay extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 카카오페이 주문 조회 API
   */
  public async findOrder(queryData: Request.FindKakaoPayOrder) {
    return this.request<Response.FindKakaoPayOrder>({
      method: 'GET',
      url: this.setQuery('/kakaopay/payment/order', queryData),
    });
  }
}
