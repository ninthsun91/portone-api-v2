import type * as Enum from './enums';

export interface CardPromotion {
  /** 프로모션 유형 */
  type: 'CARD';
  /** 프로모션 ID */
  id: string;
  /** 상점 ID */
  storeId: string;
  /** 프로모션 이름 */
  name: string;
  /** 할인 정책 */
  discountPolicy: PromotionDiscountPolicy;
  /** 총 예산 (int64) */
  totalBudget: number;
  /** 최대 할인 금액 (int64) */
  maxDiscountAmount?: number;
  /** 소진 금액 (int64) */
  spentAmount: number;
  /** 통화 단위 */
  currency: Enum.Currency;
  /** 프로모션 시작 일시 (RFC 3339 date-time) */
  startedAt: string;
  /** 프로모션 종료 일시 (RFC 3339 date-time) */
  endAt: string;
  /** 프로모션 중단 일시 (RFC 3339 date-time) */
  terminatedAt?: string;
  /** 프로모션 적용 가능한 카드 회사 */
  cardCompany: Enum.PromotionCardCompany;
  /** 프로모션 상태 */
  status: Enum.PromotionStatus;
  /** 프로모션 생성 일시 (RFC 3339 date-time) */
  createdAt: string;
  /** 프로모션 복구 옵션 */
  recoverOption: PromotionRecoverOption;
}

export interface PromotionDiscountPolicy {
  partitions: PromotionDiscountPartition[];
}

export interface PromotionDiscountPartition {
  amountFrom: number;
  scheme: PromotionDiscountScheme;
}

export type PromotionDiscountScheme = PromotionAmountDiscountScheme | PromotionPercentDiscountScheme;

export interface PromotionAmountDiscountScheme {
  type: 'AMOUNT';
  amount: number;
}

export interface PromotionPercentDiscountScheme {
  type: 'PERCENT';
  percent: number;
}

export type PromotionRecoverOption = PromotionRecoverOptionRecover | PromotionRecoverOptionNoRecover;

export interface PromotionRecoverOptionRecover {
  type: 'RECOVER';
}

export interface PromotionRecoverOptionNoRecover {
  type: 'NO_RECOVER';
  spareBudget?: PromotionSpareBudget;
}

export type PromotionSpareBudget = PromotionSpareBudgetAmount | PromotionSpareBudgetPercent;

export interface PromotionSpareBudgetAmount {
  type: 'AMOUNT';
  amount: number;
}

export interface PromotionSpareBudgetPercent {
  type: 'PERCENT';
  percent: number;
}
