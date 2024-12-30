import { PortOneRequest } from '../request';
import { PortOneClient } from '../client';
import type { Response } from '../types';

export class Promotions extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 주어진 아이디에 대응되는 프로모션을 조회
   * @param paymentId 결제 건 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async find(promotionId: string) {
    return this.request<Response.FindPromotion>({
      method: 'GET',
      url: this.setQuery(`/promotions/${promotionId}`, {}),
    });
  }
}
