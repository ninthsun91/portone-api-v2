import type { PageInfo } from '../common';
import type { PaymentSchedule, PaymentScheduleSummary } from '../schedules';

export type FindSchedule = PaymentSchedule;

export interface FindManySchedules {
  items: PaymentSchedule[];
  page: PageInfo;
}

export interface CancelSchedule {
  /** 취소 완료된 결제 예약 건 ID 목록 */
  revokedScheduleIds: string[];
  /** 결제 예약 건 취소 완료 시점 (RFC 3339 date-time) */
  revokedAt?: string;
}

export interface ScheduleNextPayment {
  schedule: PaymentScheduleSummary;
}
