import type { Customer } from './common';
import type * as Enum from './enums';
import type { PaymentProduct } from './payments';

export type PaymentSchedule =
  | FailedPaymentSchedule
  | RevokedPaymentSchedule
  | ScheduledPaymentSchedule
  | StartedPaymentSchedule
  | SucceededPaymentSchedule;

interface PaymentScheduleBase {
  /** 결제 예약 건 상태 */
  status: Enum.PaymentScheduleStatus;
  /** 결제 예약 ID */
  id: string;
  /** 가맹점 ID */
  merchantId: string;
  /** 상점 ID */
  storeId: string;
  /** 결제 건 ID */
  paymentId: string;
  /** 빌링키 */
  billingKey: string;
  /** 주문명 */
  orderName: string;
  /** 문화비 지출 여부 */
  isCulturalExpense: boolean;
  /** 에스크로 결제 여부 */
  isEscrow: boolean;
  /** 고객 정보 */
  customer: Customer;
  /** 사용자 지정 데이터 */
  customData: string;
  /** 결제 총 금액 (int64) */
  totalAmount: number;
  /** 면세액 (int64) */
  taxFreeAmount?: number;
  /** 부가세액 (int64) */
  vatAmount?: number;
  /** 통화단위 */
  currency: Enum.Currency;
  /** 할부 개월 수 (int32) */
  installmentMonth?: number;
  /** 웹훅 주소 */
  noticeUrls?: string[];
  /** 상품 정보 */
  products?: PaymentProduct[];
  /** 결제 예약 등록 시점 (RFC 3339 date-time) */
  createdAt: string;
  /** 결제 예정 시점 (RFC 3339 date-time) */
  timeToPay: string;
}

export interface FailedPaymentSchedule extends PaymentScheduleBase {
  status: 'FAILED';
  /** 결제 시작 시점 (RFC 3339 date-time) */
  startedAt: string;
  /** 결제 완료 시점 (RFC 3339 date-time) */
  completedAt: string;
}
export interface PendingPaymentSchedule extends PaymentScheduleBase {
  status: 'PENDING';
  /** 결제 시작 시점 (RFC 3339 date-time) */
  startedAt: string;
  /** 결제 완료 시점 (RFC 3339 date-time) */
  completedAt: string;
}

export interface RevokedPaymentSchedule extends PaymentScheduleBase {
  status: 'REVOKED';
  /** 결제 취소 시점 (RFC 3339 date-time) */
  revokedAt: string;
}

export interface ScheduledPaymentSchedule extends PaymentScheduleBase {
  status: 'SCHEDULED';
}

export interface StartedPaymentSchedule extends PaymentScheduleBase {
  status: 'STARTED';
  /** 결제 시작 시점 (RFC 3339 date-time) */
  startedAt: string;
}

export interface SucceededPaymentSchedule extends PaymentScheduleBase {
  status: 'SUCCEEDED';
  /** 결제 시작 시점 (RFC 3339 date-time) */
  startedAt: string;
  /** 결제 완료 시점 (RFC 3339 date-time) */
  completedAt: string;
}

export interface PaymentScheduleFilterInput {
  /** 상점 ID. 미입력시 토큰에 담긴 상점 ID 사용 */
  storeId?: string;
  /** 빌링키 */
  billingKey?: string;
  /** 결제 예정 시점 조건 범위의 시작 (RFC 3339 date-time) */
  from?: string;
  /** 결제 예정 시점 조건 범위의 끝 (RFC 3339 date-time) */
  until?: string;
  /** 결제 예정 상태 리스트 */
  status?: Enum.PaymentScheduleStatus[];
}

export interface PaymentScheduleSortInput {
  /** 결제 예약 건 정렬 기준 */
  by?: Enum.PaymentScheduleSortBy;
  /** 정렬 방식 */
  order?: Enum.SortOrder;
}

export interface PaymentScheduleSummary {
  /** 결제 예약 건 ID */
  id: string;
}
