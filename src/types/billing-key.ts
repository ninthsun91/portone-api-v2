import type { Card, CardCredential, CustomerInput, SeparatedAddressInput } from './common';
import type * as Enum from './enums';
import type { CashReceiptInput, PaymentAmountInput, PaymentProduct } from './payments';

export interface BillingKeyPaymentInput {
  /** 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용 */
  storeId?: string;
  /** 빌링키 결제에 사용할 빌링키 */
  billingKey: string;
  /** 주문명 */
  orderName: string;
  /** 고객 정보 입력 정보 */
  customer?: CustomerInput;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** 금액 세부 입력 정보 */
  amount: PaymentAmountInput;
  /** 통화 단위 */
  currency: Enum.Currency;
  /** 할부 개월 수 (int32) */
  installmentMonth?: number;
  /** 무이자 할부 이자를 가맹점이 부담할지 여부 */
  useFreeInterestFromMerchant?: boolean;
  /** 카드 포인트 사용 여부 */
  useCardPoint?: boolean;
  /** 현금영수증 입력 정보 */
  cashReceipt?: CashReceiptInput;
  /** 국가 */
  country?: Enum.Country;
  /** 웹훅 주소. 입력 시 상점 설정값보다 우선 적용 */
  noticeUrls?: string[];
  /** 상품 정보. 미입력 시 빈 배열로 해석 */
  products?: PaymentProduct[];
  /** 상품 개수 (int32) */
  productCount?: number;
  /** 상품 유형 */
  productType?: Enum.PaymentProductType;
  /** 분리형식 주소 입력 정보 */
  shippingAddress?: SeparatedAddressInput;
  /** pg사별 추가 파라미터 */
  bypass?: string;
}

export type BillingKeyPaymentMethod =
  | BillingKeyPaymentMethodCard
  | BillingKeyPaymentMethodEasyPay
  | BillingKeyPaymentMethodMobile
  | BillingKeyPaymentMethodPaypal
  | BillingKeyPaymentMethodTransfer;

export interface BillingKeyPaymentMethodCard {
  type: 'BillingKeyPaymentMethodCard';
  card?: Card;
}

export interface BillingKeyPaymentMethodEasyPay {
  type: 'BillingKeyPaymentMethodEasyPay';
  easyPay?: Enum.EasyPayProvider;
  method?: BillingKeyPaymentMethodEasyPayMethod;
}

export type BillingKeyPaymentMethodEasyPayMethod =
  | BillingKeyPaymentMethodCard
  | BillingKeyPaymentMethodEasyPayCharge
  | BillingKeyPaymentMethodTransfer;

export interface BillingKeyPaymentMethodEasyPayCharge {
  type: 'BillingKeyPaymentMethodEasyPayCharge';
}

export interface BillingKeyPaymentMethodMobile {
  type: 'BillingKeyPaymentMethodMobile';
  phoneNumber?: string;
}

export interface BillingKeyPaymentMethodPaypal {
  type: 'BillingKeyPaymentMethodPaypal';
}

export interface BillingKeyPaymentMethodTransfer {
  type: 'BillingKeyPaymentMethodTransfer';
  /** 표준 은행 코드 */
  bank?: string;
  /** 계좌 번호 */
  accountNumber?: string;
}

export interface BillingKeyPaymentSummary {
  /** PG사 결제 ID */
  pgTxId: string;
  /** 결제 완료 시점 (RFC 3339 date-time) */
  paidAt: string;
}

export interface BillingKeyInfoSummary {
  /** 빌링키 */
  billingKey: string;
  /** 발급 완료 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface InstantBillingKeyPaymentMethodInput {
  card?: InstantBillingKeyPaymentMethodInputCard;
}

export interface InstantBillingKeyPaymentMethodInputCard {
  credential: CardCredential;
}
