import type { BillingKeyInfoSummary, BillingKeyPaymentMethod } from '../billing-key';
import type { Customer, SelectedChannel } from '../common';

export interface FindBillingKey {
  billingKey: string;
  merchantId: string; // 가맹점 ID
  storeId: string; // 상점 ID
  methods?: BillingKeyPaymentMethod[]; // 빌링키 결제 수단 상세 정보
  channels: SelectedChannel[]; // 빌링키 발급 시 사용된 채널
  customer: Customer; // 고객 정보
  customData?: string; // 사용자 지정 데이터
  issueId?: string; // 가맹점이 채번하는 빌링키 발급 건 고유 ID
  issueName?: string; // 빌링키 발급 건 이름
  issuedAt: string; // 빌링키 발급 시점 (RFC 3339 date-time)
}

export interface IssueBillingKey {
  billingKeyInfo: BillingKeyInfoSummary;
}

export interface DeleteBillingKey {
  deletedAt: string; // 빌링키 삭제 시점 (RFC 3339 date-time)
}
