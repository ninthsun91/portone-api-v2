import type { CashReceipt, CashReceiptSummary } from '../cash-receipt';

export type FindCashReceipt = CashReceipt;

export interface IssueCashReceipt {
  /** 현금영수증 내역 */
  cashReceipt: CashReceiptSummary;
}

export interface CancelCashReceipt {
  /** 취소 금액 (int64) */
  cancelledAmount: number;
  /** 현금영수증 취소 완료 시점 (RFC 3339 date-time) */
  cancelledAt: string;
}
