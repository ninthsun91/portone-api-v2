import type { BillingKeyInfo, BillingKeyInfoSummary } from '../billing-key';
import type { ChannelSpecificFailure, PageInfo } from '../common';

export type FindBillingKey = BillingKeyInfo;

export interface FindManyBillingKeys {
  items: BillingKeyInfo[];
  page: PageInfo;
}

export interface IssueBillingKey {
  billingKeyInfo: BillingKeyInfoSummary;
  channelSpecificFailures?: ChannelSpecificFailure[];
}

export interface DeleteBillingKey {
  /** 빌링키 삭제 시점 (RFC 3339 date-time) */
  deletedAt: string;
}
