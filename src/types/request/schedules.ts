import type { BillingKeyPaymentInput } from '../billing-key';
import type { PageInput } from '../common';
import type { PaymentScheduleFilterInput, PaymentScheduleSortInput } from '../schedules';

export interface FindManySchedules {
  /** 다건 조회 API에 사용되는 페이지 입력 정보 */
  page?: PageInput;
  /** 결제예약 건 다건 조회를 위한 입력 정보 */
  filter?: PaymentScheduleFilterInput;
  /** 결제예약 건 다건 조회 시 정렬 조건 */
  sort?: PaymentScheduleSortInput;
}

/**
 * 결제 예약 건을 취소합니다.
 * billingKey, scheduleIds 중 하나 이상은 필수로 입력합니다.
 * billingKey 만 입력된 경우 -> 해당 빌링키로 예약된 모든 결제 예약 건들이 취소됩니다.
 * scheduleIds 만 입력된 경우 -> 입력된 결제 예약 건 아이디에 해당하는 예약 건들이 취소됩니다.
 * billingKey, scheduleIds 모두 입력된 경우 -> 입력된 결제 예약 건 아이디에 해당하는 예약 건들이 취소됩니다.
 * 단, 예약한 빌링키가 입력된 빌링키와 일치하지 않으면 실패합니다.
 * 위 정책에 따라 선택된 결제 예약 건들 중 하나라도 취소에 실패할 경우, 모든 취소 요청이 실패합니다.
 */
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
