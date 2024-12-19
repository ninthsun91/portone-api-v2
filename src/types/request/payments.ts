import type { CustomerInput, PageInput, SeparatedAddressInput } from '../common';
import type * as Enum from '../enums';
import type {
  CancelPaymentBodyRefundAccount,
  CashReceiptInput,
  InstantPaymentMethodInput,
  PaymentAmountInput,
  PaymentEscrowReceiverInput,
  PaymentEscrowSenderInput,
  PaymentFilterInput,
  PaymentLogistics,
  PaymentProduct,
  RegisterStoreReceiptBodyItem,
} from '../payments';

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
  requester?: Enum.CancelRequester;
  promotionDiscountRetainOption?: Enum.PromotionDiscountRetainOption;
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
  /** 채널 키. 다수 채널에 대해 발급된 빌링키에 대해 결제 채널을 특정할 때 명시 */
  channelKey?: string;
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
  /** 해당 결제에 적용할 프로모션 ID */
  promotionId?: string;
  /** PG사별 특수 파라미터 */
  bypass?: string;
}

export interface PayInstantBase {
  /** 미입력시 인증토큰에 등록된 storeId 사용 */
  storeId?: string;
  /** 채널키 또는 채널 그룹 ID 필수 */
  channelKey?: string;
  /** 채널 그룹 ID 또는 채널키 필수 */
  channelGroupId?: string;
  /** 수기 결제 수단 입력 정보 */
  method: InstantPaymentMethodInput;
  /** 주문명 */
  orderName: string;
  /** 문화비 지출 여부 */
  isCulturalExpense?: boolean;
  /** 에스크로 결제 여부 */
  isEscrow?: boolean;
  /** 고객 정보 입력 정보 */
  customer?: CustomerInput;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** 금액 세부 입력 정보 */
  amount: PaymentAmountInput;
  /** 통화 단위 */
  currency: Enum.Currency;
  /** 국가 */
  country?: Enum.Country;
  /** 웹훅 주소. 결제 승인/실패 시 요청을 받을 웹훅 주소입니다. 상점에 설정되어 있는 값보다 우선적으로 적용됩니다. 입력된 값이 없을 경우에는 빈 배열로 해석됩니다. */
  noticeUrls?: string[];
  /** 상품 정보 */
  products?: PaymentProduct[];
  /** 상품 개수 */
  productCount?: number;
  /** 상품 유형 */
  productType?: Enum.PaymentProductType;
  /** 분리 형식의 주소 입력 정보 */
  shippingAddress?: SeparatedAddressInput;
  /** 해당 결제에 적용할 프로모션 ID */
  promotionId?: string;
}
export type PayInstant = PayInstantBase & (
  | { channelKey: string; channelGroupId?: never }
  | { channelKey?: never; channelGroupId: string }
)

export interface CloseVirtualAccount { }

export interface CreateEscrowLogistics {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 에스크로 발송자 정보 */
  sender?: PaymentEscrowSenderInput;
  /** 에스크로 수취자 정보 */
  receiver?: PaymentEscrowReceiverInput;
  /** 에스크로 배송 정보 */
  logistics: PaymentLogistics;
  /** 이메일 알림 전송 여부 */
  sendEmail?: boolean;
  /** 상품 정보 */
  products?: PaymentProduct[];
}

export interface UpdateEscrowLogistics {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 에스크로 발송자 정보 */
  sender?: PaymentEscrowSenderInput;
  /** 에스크로 수취자 정보 */
  receiver?: PaymentEscrowReceiverInput;
  /** 에스크로 배송 정보 */
  logistics: PaymentLogistics;
  /** 이메일 알림 전송 여부 */
  sendEmail?: boolean;
  /** 상품 정보 */
  products?: PaymentProduct[];
}

export interface CompleteEscrow {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 확인 주체가 상점인지 여부. 구매확정요청 주체가 가맹점 관리자인지 구매자인지 구분하기 위한 필드입니다. 네이버페이 전용 파라미터이며, 구분이 모호한 경우 가맹점 관리자(true)로 입력합니다. */
  fromStore?: boolean;
}

export interface ResendWebhook {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 웹훅 ID */
  webhookId?: string;
}

export interface RegisterStoreReceipt {
  /** 하위 상점 거래 목록 */
  items: RegisterStoreReceiptBodyItem[];
  /** 상점 ID */
  storeId?: string;
}
