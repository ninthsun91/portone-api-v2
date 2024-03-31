import type { Card, CardCredential } from './common';
import type * as Enum from './enums';

export type BillingKeyPaymentMethod =
  | BillingKeyPaymentMethodCard
  | BillingKeyPaymentMethodEasyPay
  | BillingKeyPaymentMethodMobile
  | BillingKeyPaymentMethodPaypal
  | BillingKeyPaymentMethodTransfer;

export interface BillingKeyPaymentMethodCard {
  type: 'BillingKeyPaymentMethodCard';
  card?: Card;
}

export interface BillingKeyPaymentMethodEasyPay {
  type: 'BillingKeyPaymentMethodEasyPay';
  easyPay?: Enum.EasyPayProvider;
  method?: BillingKeyPaymentMethodEasyPayMethod;
}

export type BillingKeyPaymentMethodEasyPayMethod =
  | BillingKeyPaymentMethodCard
  | BillingKeyPaymentMethodEasyPayCharge
  | BillingKeyPaymentMethodTransfer;

export interface BillingKeyPaymentMethodEasyPayCharge {
  type: 'BillingKeyPaymentMethodEasyPayCharge';
}

export interface BillingKeyPaymentMethodMobile {
  type: 'BillingKeyPaymentMethodMobile';
  phoneNumber?: string;
}

export interface BillingKeyPaymentMethodPaypal {
  type: 'BillingKeyPaymentMethodPaypal';
}

export interface BillingKeyPaymentMethodTransfer {
  type: 'BillingKeyPaymentMethodTransfer';
  /** 표준 은행 코드 */
  bank?: string;
  /** 계좌 번호 */
  accountNumber?: string;
}

export interface BillingKeyPaymentSummary {
  /** PG사 결제 ID */
  pgTxId: string;
  /** 결제 완료 시점 (RFC 3339 date-time) */
  paidAt: string;
}

export interface BillingKeyInfoSummary {
  /** 빌링키 */
  billingKey: string;
  /** 발급 완료 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface InstantBillingKeyPaymentMethodInput {
  card?: InstantBillingKeyPaymentMethodInputCard;
}

export interface InstantBillingKeyPaymentMethodInputCard {
  credential: CardCredential;
}
