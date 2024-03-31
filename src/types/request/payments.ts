import type { CustomerInput, PageInput, SeparatedAddressInput } from '../common';
import type * as Enum from '../enums';
import type { CancelPaymentBodyRefundAccount, CashReceiptInput, PaymentAmountInput, PaymentFilterInput, PaymentProduct } from '../payments';

export interface PreRegisterPayment {
  /** 상점 ID. 미입력시 토큰에 담긴 상점 ID 사용 */
  storeId?: string;
  /** 결제 총 금액 (int64) */
  totalAmount?: number;
  /** 결제 면세 금액 (int64) */
  taxFreeAmount?: number;
  currency?: Enum.Currency;
}

export interface FindManyPayments {
  /** 다건 조회 API에 사용되는 페이지 입력 정보 */
  page?: PageInput;
  /** 결제 건 다건 조회를 위한 입력 정보 */
  filter?: PaymentFilterInput;
}

export interface CancelPayment {
  /** 상점 ID. 미입력시 토큰에 담긴 상점 ID 사용 */
  storeId?: string;
  /** 취소 총 금액. 입력하지 않을 시 전액 취소 (int64) */
  amount?: number;
  /** 취소 금액 중 면세 금액. 입력하지 않을 시 전액 과세 취소 (int64) */
  taxFreeAmount?: number;
  /** 취소 금액 중 부가세액. 입력하지 않을 시 자동 계산 (int64) */
  vatAmount?: number;
  /** 취소 사유 */
  reason: string;
  /** 결제 건의 취소 가능 잔액. 본 취소 요청 이전의 취소 가능 잔액으로써, 값을 입력하면 잔액이 일치하는 경우에만 취소가 진행됩니다. 값을 입력하지 않으면 별도의 검증 처리를 수행하지 않습니다. (int64) */
  currentCancellableAmount?: number;
  /** 고객 정보 입력 형식 */
  refundAccount?: CancelPaymentBodyRefundAccount;
}

export interface PayWithBillingKey {
  /** 미입력시 인증토큰에 등록된 storeId 사용 */
  storeId?: string;
  /** 빌링키 결제에 사용할 빌링키 */
  billingKey: string;
  /** 주문명 */
  orderName: string;
  /** 통화 단위 */
  currency: Enum.Currency;
  /** 주문금액 세부 정보 */
  amount: PaymentAmountInput;
  /** 고객 정보 */
  customer?: CustomerInput;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** 할부개월수 (int32) */
  installmentMonth?: number;
  /** 가맹점 무이자할부 사용여부 */
  useFreeInterestFromMerchant?: boolean;
  /** 카드포인트 사용여부 */
  useCardPoint?: boolean;
  /** 현금영수증 입력 정보 */
  cashReceipt?: CashReceiptInput;
  /** 국가 */
  country?: Enum.Country;
  /** 결제 승인/실패 시 호출할 웹훅 URL. 콘솔에 입력한 값보다 우선 사용 */
  noticeUrls?: string[];
  /** 상품 정보. 미입력시 빈 배열로 해석 */
  products?: PaymentProduct[];
  /** 상품 개수 */
  productCount?: number;
  /** 상품 유형 */
  productType?: Enum.PaymentProductType;
  /** 분리 형식의 주소 입력 정보 */
  shippingAddress?: SeparatedAddressInput;
  /** PG사별 특수 파라미터 */
  bypass?: string;
}

export interface PayInstant {}

export interface CloseVirtualAccount {}

export interface CreateEscrowLogistics {}

export interface UpdateEscrowLogistics {}

export interface CompleteEscrow {}

export interface ResendWebhook {}

export interface RegisterStoreReceipt {}
