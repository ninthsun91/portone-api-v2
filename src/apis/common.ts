import { PortOneRequest } from '../request';
import { PortOneClient } from '../client';
import type { Response } from '../types';

export class Common extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 은행의 이름 등 정보 조회.
   * 사용자에게 한국어 명칭을 제공하는 등의 용도로 사용
   */
  public async findBankNames() {
    return this.request<Response.FindCashReceipt>({
      method: 'GET',
      url: this.setQuery(`/banks`, {}),
    });
  }
}
