import type { BillingKeyFilterInput, BillingKeySortInput, InstantBillingKeyPaymentMethodInput } from '../billing-key';
import type { CustomerInput, PageInput } from '../common';

export interface FindManyBillingKeys {
  page?: PageInput;
  sort?: BillingKeySortInput;
  filter?: BillingKeyFilterInput;
}

export interface IssueBillingKey {
  /** 상점 ID. 미입력시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 빌링키 발급 시 결제 수단 입력 양식 */
  method: InstantBillingKeyPaymentMethodInput;
  /** 채널키 */
  channelKey: string;
  /** 채널 그룹 ID */
  channelGroupId?: string;
  /** 고객정보 입력 정보 */
  customer?: CustomerInput;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** pg사별 특수 파라미터 */
  bypass?: string;
  /** 웹훅 주소. 상점 설정값보다 우선 적용 */
  noticeUrls?: string[];
}
