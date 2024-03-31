import { PortOneRequest } from './request';
import { PortOneClient } from './client';
import type { Request, Response } from './types';

export class Schedules extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  public async find(scheduleId: string) {
    return this.request<Response.FindSchedule>({
      method: 'GET',
      url: `/payment-schedules/${scheduleId}`,
    });
  }

  public async findMany(data: Request.FindManySchedules) {
    return this.request<Response.FindManySchedules>({
      method: 'GET',
      url: '/payment-schedules',
      data,
    });
  }

  public async cancel(data: Request.CancelSchedule) {
    return this.request<Response.CancelSchedule>({
      method: 'DELETE',
      url: '/payment-schedules',
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
