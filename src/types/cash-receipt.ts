import { SelectedChannel } from './common';
import * as Enum from './enums';

export type CashReceipt =
  | CancelledCashReceipt
  | IssuedCashReceipt
  | IssueFailedCashReceipt;

export interface CashReceiptBase {
  /** 현금영수증 상태 */
  status: 'CANCELLED' | 'ISSUED' | 'ISSUE_FAILED';
  /** 가맹점 ID */
  merchantId: string;
  /** 상점 ID */
  storeId: string;
  /** 결제 건 ID */
  paymentId: string;
  /** (결제, 본인인증 등에) 선택된 채널 정보 */
  channel: SelectedChannel;
  /** 결제금액 (int64) */
  amount: number;
  /** 면세액 (int64) */
  taxFreeAmount?: number;
  /** 부가세액 (int64) */
  vatAmount?: number;
  /** 통화단위 */
  currency: Enum.Currency;
  /** 주문명 */
  orderName: string;
  /** 수동발급여부 */
  isManual: boolean;
  /** 발급 유형 */
  type?: Enum.CashReceiptType;
  /** PG사 현금영수증 ID */
  pgReceiptId?: string;
  /** 승인번호 */
  issueNumber: string;
  /** 현금영수증 URL */
  url?: string;
}

export interface CancelledCashReceipt extends CashReceiptBase {
  status: 'CANCELLED',
  /** 발급 시점 (RFC 3339 date-time) */
  issuedAt: string;
  /** 취소 시점 (RFC 3339 date-time) */
  cancelledAt: string;
}

export interface IssuedCashReceipt extends CashReceiptBase {
  status: 'ISSUED',
  /** 발급 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface IssueFailedCashReceipt
  extends Pick<CashReceiptBase,
  | 'status'
  | 'merchantId'
  | 'storeId'
  | 'paymentId'
  | 'channel'
  | 'orderName'
  | 'isManual'
> {
  status: 'ISSUE_FAILED',
}

export interface CashReceiptSummary {
  /** 현금영수증 발행 번호 */
  issueNumber: string;
  /** 현금영수증 URL */
  url: string;
  /** PG사 현금영수증 ID */
  pgReceiptId: string;
}

export interface IssueCashReceiptCustomerInput {
  /** 고객 식별값 */
  identityNumber: string;
  /** 이름 */
  name?: string;
  /** 이메일 */
  email?: string;
  /** 전화번호 */
  phoneNumber?: string;
}
