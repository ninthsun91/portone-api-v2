import * as Enum from '../enums';
import type { IssueCashReceiptCustomerInput } from '../cash-receipt';
import type { PaymentAmountInput } from '../payments';

export interface FindCashReceipt {}

export interface IssueCashReceipt {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 결제 건 ID */
  paymentId: string;
  /** 채널키 */
  channelKey: string;
  /** 발급 유형 */
  type: Enum.CashReceiptType;
  /** 주문명 */
  orderName: string;
  /** 통화 단위 */
  currency: Enum.Currency;
  /** 금액세부 입력 정보 */
  amount: PaymentAmountInput;
  /** 상품 유형 */
  productType?: Enum.PaymentProductType;
  /** 현금영수증 발급 시 고객 관련 입력 정보 */
  customer: IssueCashReceiptCustomerInput;
}

export interface CancelCashReceipt {}
