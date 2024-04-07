import type { BillingKeyPaymentSummary } from '../billing-key';
import type { PageInfo } from '../common';
import type { InstantPaymentSummary, Payment, PaymentCancellation, PaymentWebhook } from '../payments';

export interface PreRegisterPayment {}

export type FindPayment = Payment;

export interface FindManyPayments {
  items: Payment[];
  page: PageInfo;
}

export interface CancelPayment {
  cancellation: PaymentCancellation;
}

export interface PayWithBillingKey {
  payment: BillingKeyPaymentSummary;
}

export interface PayInstant {
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
