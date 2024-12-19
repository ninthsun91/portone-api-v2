import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class Schedules extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 결제 예약 단건 조회
   * @param scheduleId 조회할 결제 예약 건 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async find(scheduleId: string, storeId?: string) {
    return this.request<Response.FindSchedule>({
      method: 'GET',
      url: this.setQuery(`/payment-schedules/${scheduleId}`, { storeId }),
    });
  }

  /**
   * 결제 예약 다건 조회
   */
  public async findMany(requestBody: Request.FindManySchedules) {
    return this.request<Response.FindManySchedules>({
      method: 'GET',
      url: this.setQuery('/payment-schedules', { requestBody }),
    });
  }

  /**
   * 결제 예약 취소
   */
  public async cancel(requestBody: Request.CancelSchedule) {
    return this.request<Response.CancelSchedule>({
      method: 'DELETE',
      url: this.setQuery('/payment-schedules', { requestBody }),
    });
  }

  /**
   * 결제 예약
   * @param paymentId 결제 건 ID
   */
  public async nextPayment(paymentId: string, data: Request.ScheduleNextPayment) {
    return this.request<Response.ScheduleNextPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/schedule`,
      data,
    });
  }
}
