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
  phoneNumber?: string; // 전화번호
}

export interface BillingKeyPaymentMethodPaypal {
  type: 'BillingKeyPaymentMethodPaypal';
}

export interface BillingKeyPaymentMethodTransfer {
  type: 'BillingKeyPaymentMethodTransfer';
  bank?: string; // 표준 은행 코드
  accountNumber?: string; // 계좌번호
}

export interface BillingKeyInfoSummary {
  billingKey: string; // 발급된 빌링키
  issuedAt: string; // 빌링키 발급 완료 시점 (RFC 3339 date-time)
}

export interface InstantBillingKeyPaymentMethodInput {
  card?: InstantBillingKeyPaymentMethodInputCard;
}

export interface InstantBillingKeyPaymentMethodInputCard {
  credential: CardCredential;
}
