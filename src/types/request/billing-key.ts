import type { InstantBillingKeyPaymentMethodInput } from '../billing-key';
import type { CustomerInput } from '../common';

export interface IssueBillingKey {
  storeId?: string;
  method: InstantBillingKeyPaymentMethodInput;
  channelKey: string;
  customer?: CustomerInput;
  customData?: string;
  /** pg사별 특수 파라미터 */
  bypass?: string;
  /** 웹훅 주소. 상점 설정값보다 우선 적용 */
  noticeUrls?: string[];
}
