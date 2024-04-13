import type { BillingKeyPaymentSummary } from '../billing-key';
import type { PageInfo } from '../common';
import type { InstantPaymentSummary, Payment, PaymentCancellation, PaymentWebhook } from '../payments';

export interface PreRegisterPayment {}

export type FindPayment = Payment;

export interface FindManyPayments {
  /** 조회된 결제 건 리스트 */
  items: Payment[];
  /** 반환된 페이지 결과 정보 */
  page: PageInfo;
}

export interface CancelPayment {
  /** 결제 취소 내역 */
  cancellation: PaymentCancellation;
}

export interface PayWithBillingKey {
  /** 빌링키 결제 완료된 결제 건 요약 정보 */
  payment: BillingKeyPaymentSummary;
}

export interface PayInstant {
  /** 수기 결제가 완료된 결제 건 요약 정보 */
  payment: InstantPaymentSummary;
}

export interface CloseVirtualAccount {
  /** 가상계좌 말소 시점 (RFC 3339 date-time) */
  closedAt: string;
}

export interface CreateEscrowLogistics {
  /** 송장번호 */
  invoiceNumber: string;
  /** 발송 시점 (RFC 3339 date-time) */
  sentAt: string;
  /** 에스크로 정보 등록 시점 (RFC 3339 date-time) */
  appliedAt: string;
}

export interface UpdateEscrowLogistics {
  /** 송장번호 */
  invoiceNumber: string;
  /** 발송 시점 (RFC 3339 date-time) */
  sentAt: string;
  /** 에스크로 정보 수정 시점 (RFC 3339 date-time) */
  modifiedAt: string;
}

export interface CompleteEscrow {
  /** 에스크로 구매 확정 시점 (RFC 3339 date-time) */
  completedAt: string;
}

export interface ResendWebhook {
  /** 웹훅 성공 내역 */
  webhook: PaymentWebhook;
}

export interface RegisterStoreReceipt {
  /** 결제 영수증 URL */
  receiptUrl?: string;
}
