import type { Card, CardCredential, ChannelGroupSummary, Customer, CustomerInput, SelectedChannel, SeparatedAddressInput } from './common';
import type * as Enum from './enums';
import type { CashReceiptInput, PaymentAmountInput, PaymentProduct } from './payments';

export type BillingKeyInfo = DeletedBillingKeyInfo | IssuedBillingKeyInfo;

export interface BillingKeyInfoBase {
  status: 'DELETED' | 'ISSUED';
  /** 빌링키 */
  billingKey: string;
  /** 가맹점 ID */
  merchantId: string;
  /** 상점 ID */
  storeId: string;
  /** 빌링키 결제 수단 상세 정보 */
  methods: BillingKeyPaymentMethod[];
  /** 빌링키 발급 시 사용된 채널 */
  channels: SelectedChannel[];
  /** 채널 그룹 정보 */
  channelGroup?: ChannelGroupSummary;
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
  /** 빌링키 발급 요청 시점 (RFC 3339 date-time) */
  requestedAt?: string;
  /** 채널 별 빌링키 발급 응답. 슈퍼 빌링키의 경우 빌링키 발급이 성공하더라도 일부 채널에 대한 빌링키 발급은 실패할 수 있습니다. */
  pgBillingKeyIssueResponses?: PgBillingKeyIssueResponse[];
}

export interface DeletedBillingKeyInfo extends BillingKeyInfoBase {
  status: 'DELETED';
  deletedAt: string;
}

export interface IssuedBillingKeyInfo extends BillingKeyInfoBase {
  status: 'ISSUED';
}

export type PgBillingKeyIssueResponse = FailedPgBillingKeyIssueResponse | IssuedPgBillingKeyIssueResponse
export interface FailedPgBillingKeyIssueResponse {
  type: 'FAILED';
  /** 결제, 본인인증 등에 선택된 채널 정보 */
  channel: SelectedChannel;
  /** 발급 실패 상세 정보 */
  failure: BillingKeyFailure;
}
export interface IssuedPgBillingKeyIssueResponse {
  type: 'ISSUED';
  /** 결제, 본인인증 등에 선택된 채널 정보 */
  channel: SelectedChannel;
  /** PG사 결제 ID */
  pgTxId?: string;
  /** 빌링키 결제 수단 정보 */
  method?: BillingKeyPaymentMethod;
}

export interface BillingKeyFailure {
  /** 실패 사유 */
  message?: string;
  /** PG사 코드 */
  pgCode?: string;
  /** PG사 메시지 */
  pgMessage?: string;
  /** 실패 시점 (RFC 3339 date-time) */
  failedAt: string;
}

export interface BillingKeyPaymentInput {
  /** 접근 권한이 있는 상점 아이디만 입력 가능하며, 미입력시 토큰에 담긴 상점 아이디를 사용 */
  storeId?: string;
  /** 빌링키 결제에 사용할 빌링키 */
  billingKey: string;
  /** 채널키. 다수 채널에 대해 발급된 빌링키에 대해 결제 채널을 특정하고 싶을 때 명시. */
  channelKey?: string;
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
  /** 프로모션 ID */
  promotionId?: string;
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
  /** 결제, 본인인증 등에 선택된 채널 정보 */
  channels?: SelectedChannel[];
  /** 발급 완료 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface InstantBillingKeyPaymentMethodInput {
  card?: InstantBillingKeyPaymentMethodInputCard;
}

export interface InstantBillingKeyPaymentMethodInputCard {
  credential: CardCredential;
}

export interface BillingKeyFilterInput {
  /** 상점 ID */
  storeId?: string;
  /** 시각 범위를 적용할 필드 */
  timeRangeField?: Enum.BillingKeyTimeRangeField;
  /** 조회 기준 시점 범위의 시작 (RFC 3339 date-time) */
  from?: string;
  /** 조회 기준 시점 범위의 끝 (RFC 3339 date-time) */
  until?: string;
  /** 빌링키 상태 */
  status?: Enum.BillingKeyStatus[];
  /** 채널 그룹 ID 리스트 */
  channelGroupIds?: string[];
  /** 고객 ID */
  customerId?: string;
  /** 결제가 발생한 클라이언트 환경 */
  platformType?: Enum.PaymentClientType;
  /** 통합검색 입력 정보 */
  textSearch?: BillingKeyTextSearch;
  /** PG사 결제 모듈 리스트 */
  pgProviders?: Enum.PgProvider[];
  /** PG사 리스트 */
  pgCompanies?: Enum.PgCompany[];
  /** 결제 수단 리스트 */
  methods?: Enum.BillingKeyPaymentMethodType[];
  /** 포트원 버전 */
  version?: Enum.PortOneVersion;
}

export interface BillingKeyTextSearch {
  /** 통합검색 항목 */
  field: Enum.BillingKeyTextSearchField;
  value: string;
}

export interface BillingKeySortInput {
  /** 정렬 기준 */
  by?: Enum.BillingKeySortBy;
  /** 정렬 방식 */
  order?: Enum.SortOrder;
}

