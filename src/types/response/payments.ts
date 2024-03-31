import type { BillingKeyPaymentSummary } from '../billing-key';
import type { PageInfo, Payment, PaymentCancellation } from '../payments';

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

export interface PayInstant {}

export interface CloseVirtualAccount {}

export interface CreateEscrowLogistics {}

export interface UpdateEscrowLogistics {}

export interface CompleteEscrow {}

export interface ResendWebhook {}

export interface RegisterStoreReceipt {}
