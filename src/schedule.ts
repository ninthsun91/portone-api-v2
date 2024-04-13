import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class Schedules extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  public async find(scheduleId: string, storeId?: string) {
    return this.request<Response.FindSchedule>({
      method: 'GET',
      url: this.setQuery(`/payment-schedules/${scheduleId}`, { storeId }),
    });
  }

  public async findMany(data: Request.FindManySchedules, requestBody?: unknown) {
    return this.request<Response.FindManySchedules>({
      method: 'GET',
      url: this.setQuery('/payment-schedules', { requestBody }),
      data,
    });
  }

  public async cancel(data: Request.CancelSchedule, requestBody?: unknown) {
    return this.request<Response.CancelSchedule>({
      method: 'DELETE',
      url: this.setQuery('/payment-schedules', { requestBody }),
      data,
    });
  }

  public async nextPayment(paymentId: string, data: Request.ScheduleNextPayment) {
    return this.request<Response.ScheduleNextPayment>({
      method: 'POST',
      url: `/payments/${paymentId}/schedule`,
      data,
    });
  }
}
