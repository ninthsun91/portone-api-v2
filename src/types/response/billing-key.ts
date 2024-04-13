import type { BillingKeyInfoSummary, BillingKeyPaymentMethod } from '../billing-key';
import type { Customer, SelectedChannel } from '../common';

export interface FindBillingKey {
  /** 빌링키 */
  billingKey: string;
  /** 가맹점 ID */
  merchantId: string;
  /** 상점 ID */
  storeId: string;
  /** 빌링키 결제 수단 상세 정보 */
  methods?: BillingKeyPaymentMethod[];
  /** 빌링키 발급 시 사용된 채널 */
  channels: SelectedChannel[];
  /** 고객 정보 */
  customer: Customer;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** 가맹점이 채번하는 빌링키 발급 건 고유 ID */
  issueId?: string;
  /** 빌링키 발급 건 이름 */
  issueName?: string;
  /** 빌링키 발급 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface IssueBillingKey {
  billingKeyInfo: BillingKeyInfoSummary;
}

export interface DeleteBillingKey {
  /** 빌링키 삭제 시점 (RFC 3339 date-time) */
  deletedAt: string;
}
