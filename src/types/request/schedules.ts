import type { BillingKeyPaymentInput } from '../billing-key';
import type { PageInput } from '../common';
import type { PaymentScheduleFilterInput } from '../schedules';

export interface FindManySchedules {
  /** 다건 조회 API에 사용되는 페이지 입력 정보 */
  page?: PageInput;
  /** 결제예약 건 다건 조회를 위한 입력 정보 */
  filter?: PaymentScheduleFilterInput;
}

export interface CancelSchedule {
  /** 상점 ID. 미입력시 토큰에 담긴 상점 ID 사용 */
  storeId?: string;
  /** 빌링키 */
  billingKey?: string;
  /** 결제 예약 건 ID 목록 */
  scheduleIds?: string[];
}

export interface ScheduleNextPayment {
  /** 빌링키 결제 요청 입력 정보 */
  payment: BillingKeyPaymentInput;
  /** 결제 예정 시점 (RFC 3339 date-time) */
  timeToPay: string;
}
