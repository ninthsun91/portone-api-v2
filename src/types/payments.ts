import type { Card, Customer, DateTimeRange, SelectedChannel } from './common';
import type * as Enum from './enums';

/***************************/
/*         Payment         */
/***************************/
export type Payment =
  | PaidPayment
  | CancelledPayment
  | PartialCancelledPayment
  | FailedPayment
  | PayPendingPayment
  | ReadyPayment
  | VirtualAccountIssuedPayment;

interface PaymentBase {
  /** 결제 건 상태 */
  status: Enum.PaymentStatus;
  /** 결제 건 ID */
  id: string;
  /** 결제 건 포트원 채번 ID. V1의 imp_uid에 해당 */
  transactionId: string;
  /** 가맹점 ID */
  merchantId: string;
  /** 상점 ID. 미입력시 토큰에 담긴 상점 ID 사용 */
  storeId: string;
  /** 결제, 본인인증에 사용된 채널 정보 */
  channel?: SelectedChannel;
  /** 포트원 버전 */
  version: Enum.PortOneVersion;
  /** 결제 요청 시점 (RFC 3339 date-time) */
  requestedAt: string;
  /** 업데이트 시점 (RFC 3339 date-time) */
  updatedAt: string;
  /** 상태 변경 시점 (RFC 3339 date-time) */
  statusChangedAt: string;
  /** 주문명 */
  orderName: string;
  /** 결제 금액 정보 */
  amount: PaymentAmount;
  /** 결제 통화 */
  currency: Enum.Currency;
  /** 결제 고객 정보 */
  customer: Customer;

  method?: PaymentMethod;
  /** 결제 예약이 있는 경우 예약 ID */
  scheduleId?: string;
  /** 빌링키 결제인 경우 결제시 사용된 빌링키 */
  billingKey?: string;
  /** 웹훅 발송 내역 */
  webhooks?: PaymentWebhook[];
  /** 결제 프로모션 ID */
  promotionId?: string;
  /** 문화비 지출 여부 */
  isCulturalExpense?: boolean;
  /** 에스크로 정보 */
  escrow?: PaymentEscrow;
  /** 상품 정보 */
  products?: PaymentProduct[];
  productCount?: number;
  /** 가맹점에서 저장한 사용자 지정 데이터 */
  customData?: string;
  country?: Enum.Country;
  /** 결제 완료 시각 (RFC 3339 date-time) */
  paidAt?: string;
  /** 현금영수증 정보 */
  cashReceipt?: PaymentCashReceipt;
  /** 거래 영수증 URL */
  receiptUrl?: string;
}
export interface PaidPayment extends PaymentBase {
  status: 'PAID';
  channel: SelectedChannel;
  paidAt: string;
  /** PG사 결제 ID */
  pgTxId?: string;
  /** PG사 응답 본문 */
  pgResponse?: string;
}

export interface CancelledPayment extends PaymentBase {
  status: 'CANCELLED';
  channel: SelectedChannel;
  /** 결제 취소 내역 */
  cancellations: PaymentCancellation[];
  /** 결제 취소 시점 (RFC 3339 date-time) */
  cancelledAt: string;
}

export interface PartialCancelledPayment extends PaymentBase {
  status: 'PARTIAL_CANCELLED';
  channel: SelectedChannel;
  /** 결제 취소 내역 */
  cancellations: PaymentCancellation[];
  /** 결제 취소 시점 (RFC 3339 date-time) */
  cancelledAt: string;
}

export interface FailedPayment extends PaymentBase {
  status: 'FAILED';
  /** 결제 실패 시점 (RFC 3339 date-time) */
  failedAt: string;
}

export interface PayPendingPayment extends PaymentBase {
  status: 'PAY_PENDING';
  channel: SelectedChannel;
  /** PG사 결제 ID */
  pgTxId?: string;
}

export interface ReadyPayment extends PaymentBase {
  status: 'READY';
}

export interface VirtualAccountIssuedPayment extends PaymentBase {
  status: 'VIRTUAL_ACCOUNT_ISSUED';
  channel: SelectedChannel;
}

/***************************/
/*      PaymentAmount      */
/***************************/
export interface PaymentAmount {
  /** 총 결제 금액 */
  total: number;
  /** 면세 금액 */
  taxFree: number;
  /** 할인 금액 */
  discount: number;
  /** 실제 결제 금액 */
  paid: number;
  /** 취소 금액 */
  cancelled: number;
  /** 취소 면세 금액 */
  cancelledTaxFree: number;
  /** 부가세 금액 */
  vat?: number;
  /** 공급가액 */
  supply?: number;
}

export interface PaymentAmountInput {
  /** 총 결제 금액 */
  total: number;
  /** 면세 금액 */
  taxFree?: number;
  /** 부가세 금액 */
  vat?: number;
}

/***************************/
/*   PaymentCancellation   */
/***************************/
export type PaymentCancellation =
  | FailedPaymentCancellation
  | RequestedPaymentCancellation
  | SucceededPaymentCancellation;

interface PaymentCancellationBase {
  status: 'FAILED' | 'REQUESTED' | 'SUCCEEDED';
  id: string;
  /** PG사 결제 취소내역 ID */
  pgCancelltationId?: string;
  /** 취소 총 금액 */
  totalAmount: number;
  /** 취소 면세 금액 */
  taxFreeAmount: number;
  /** 취소 부가세 금액 */
  vatAmount: number;
  /** 취소 사유 */
  reason: string;
  /** 적립형 포인트의 환불금액 */
  easyPayDiscountAmount?: number;
  /** 취소 요청 시점 (RFC 3339 date-time) */
  requestedAt: string;
  /** 취소 완료 시점 (RFC 3339 date-time) */
  cancelledAt?: string;
}

export interface FailedPaymentCancellation extends PaymentCancellationBase {
  status: 'FAILED';
}

export interface RequestedPaymentCancellation extends PaymentCancellationBase {
  status: 'REQUESTED';
}

export interface SucceededPaymentCancellation extends PaymentCancellationBase {
  status: 'SUCCEEDED';
  /** 취소 영수증 URL */
  receiptUrl?: string;
}

export interface CancelPaymentBodyRefundAccount {
  /** 은행 */
  bank: Enum.Bank;
  /** 계좌 번호 */
  number: string;
  /** 예금주 */
  holderName: string;
  /** 예금주 연락처 - 스마트로 가상계좌 결제인 경우 필요 */
  holderPhoneNumber?: string;
}

/***************************/
/*   PaymentCanshReceipt   */
/***************************/
export type PaymentCashReceipt =
  | CancelledPaymentCashReceipt
  | IssuedPaymentCashReceipt;

interface PaymentCashReceiptBase {
  status: 'CANCELLED' | 'ISSUED';
  /** 발급 유형 */
  type?: Enum.CashReceiptType;
  /** PG사 영수증 발급 ID */
  pgReceiptId?: string;
  /** 현금영수증 승인번호 */
  issueNumber: string;
  /** 총 금액 (int64) */
  totalAmount: number;
  /** 면세 금액 (int64) */
  taxFreeAmount?: number;
  currency: Enum.Currency;
  /** 현금영수증 URL */
  url?: string;
  /** 발급 시점 (RFC 3339 date-time) */
  issuedAt: string;
}

export interface CancelledPaymentCashReceipt extends PaymentCashReceiptBase {
  status: 'CANCELLED';
  /** 취소 시점 (RFC 3339 date-time) */
  cancelledAt: string;
}

export interface IssuedPaymentCashReceipt extends PaymentCashReceiptBase {
  status: 'ISSUED';
}

export interface CashReceiptInput {
  type: Enum.CashReceiptInputType;
  customerIdentityNumber?: string; // 미발행시 입력 X
}

/***************************/
/*      PaymentEscrow      */
/***************************/
export type PaymentEscrowStatus = 'BEFORE_REGISTERED' | 'CANCELLED' | 'CONFIRMED' | 'DELIVERED' | 'REGISTERED' | 'REJECTED' | 'REJECT_CONFIRMED';
export interface PaymentEscrow {
  status: PaymentEscrowStatus;
}

/***************************/
/*      PaymentFilter      */
/***************************/
export interface PaymentFilterInput {
  /** 가맹점 ID */
  merchantId?: string;
  /** 상점 Id. 지정되지 않는 경우 가맹점 전체 결제 건 조회 */
  storeId?: string;
  /** 어떤 시점을 기준으로 조회를 할 것인지 선택합니다. CREATED_AT: 결제 건 생성 시점을 기준으로 조회합니다. STATUS_CHANGED_AT: 상태 승인 시점을 기준으로 조회합니다. 결제 건의 최종 상태에 따라 검색 기준이 다르게 적용됩니다. ready -> 결제 요청 시점 기준 paid -> 결제 완료 시점 기준 cancelled -> 결제 취소 시점 기준 failed -> 결제 실패 시점 기준 값을 입력하지 않으면 STATUS_CHANGED_AT 으로 자동 적용됩니다. */
  timestampType?: Enum.PaymentTimestampType;
  /** 결제 요청/상태 승인 시점 범위의 시작. 미입력시 end의 90일 전으로 설정 (RFC 3339 date-time) */
  from?: string;
  /** 결제 요청/상태 승인 시점 범위의 끝. 미입력시 현재 시점으로 설정 (RFC 3339 date-time) */
  until?: string;
  /** 결제 상태 리스트. 미입력시 결제 상태 필터링 적용 X */
  status?: Enum.PaymentStatus[];
  /** 결제 수단 리스트. 미입력시 결제 수단 필터링 적용 X */
  methods?: Enum.PaymentMethodType[];
  /** pg사 리스트. 미입력 시 결제 대행사 필터링 적용 X */
  pgProvider?: Enum.PgProvider[];
  /** 테스트 결제 필터링 */
  isTest?: boolean;
  /** 결제 예약 건 필터링 */
  isScheduled?: boolean;
  /** 결제 건 정렬 기준 */
  sortBy?: Enum.PaymentSortBy;
  /** 결제 건 정렬 방식 */
  sortOrder?: Enum.PaymentSortOrder;
  /** 포트원 버전 */
  version?: Enum.PortOneVersion;
  /** 웹훅 전송 상태 */
  webhookStatus?: Enum.PaymentWebhookStatus;
  /** 결제가 발생한 클라이언트 환경 */
  platformType?: Enum.PaymentClientType;
  /** 통화 단위 */
  currency?: Enum.Currency;
  /** 에스크로 결제 여부 */
  isEscrow?: boolean;
  /** 에스크로 상태 */
  escrowStatus?: Enum.PaymentFilterInputEscrowStatus;
  /** 카드 브랜드 */
  cardBrand?: Enum.CardBrand;
  /** 카드 유형 */
  cardType?: Enum.CardType;
  /** 카드 소유주 유형 */
  cardOwnerType?: Enum.CardOwnerType;
  /** 상품권 종류 */
  giftCertificateType?: Enum.PaymentMethodGiftCertificateType;
  /** 입력 시 발급 유형 */
  cashReceiptType?: Enum.CashReceiptInputType;
  /** 결제 건 내 현금영수증 상태 */
  cashReceiptStatus?: Enum.PaymentCashReceiptStatus;
  /** 현금 영수증 발행 시간 범위 */
  cashReceiptIssuedAtRange?: DateTimeRange;
  /** 현금 영수증 취소 시간 범위 */
  cashReceiptCancelledAtRange?: DateTimeRange;
  /** 통합 검색 리스트 필터 */
  textSearch?: PaymentTextSearch[];
}

/**************************/
/*   PaymentInstallment   */
/**************************/
export interface PaymentInstallment {
  /** 할부 개월 수 */
  month: number;
  /** 무이자 할부 여부 */
  isInterestFree: boolean;
}

/***************************/
/*      PaymentMethod      */
/***************************/
export type PaymentMethod =
  | PaymentMethodCard
  | PaymentMethodEasyPay
  | PaymentMethodGiftCertificate
  | PaymentMethodMobile
  | PaymentMethodTransfer
  | PaymentMethodVirtualAccount;

export interface PaymentMethodCard {
  type: 'PaymentMethodCard';
  card?: Card;
  /** 승인 번호 */
  approvalNumber?: string;
  /** 할부 정보 */
  installment?: PaymentInstallment;
  /** 포인트 사용 여부 */
  pointUsed?: boolean;
}

export interface PaymentMethodEasyPay {
  type: 'PaymentMethodEasyPay';
  card?: Card;
  /** 승인 번호 */
  approvalNumber?: string;
  /** 할부 정보 */
  installment?: PaymentInstallment;
  /** 포인트 사용 여부 */
  pointUsed?: boolean;
}

export interface PaymentMethodGiftCertificate {
  type: 'PaymentMethodGiftCertificate';
  giftCertificate?: Enum.PaymentMethodGiftCertificateType;
  /** 승인 번호 */
  approvalNumber: string;
}

export interface PaymentMethodMobile {
  type: 'PaymentMethodMobile';
  phoneNumber?: string;
}

export type PaymentMethodTransfer = {
  type: 'PaymentMethodTransfer';
  /** 표준 은행 코드 */
  bank?: string;
};

export type PaymentMethodVirtualAccount = {
  type: 'PaymentMethodVirtualAccount';
  /** 표준 은행 코드 */
  bank?: string;
  /** 계좌 번호 */
  accountNumber: string;
  /** 가상계좌 유형 */
  accountType?: Enum.PaymentMethodVirtualAccountType;
  /** 계좌주 */
  remitteeName?: string;
  /** 송금인 */
  remitterName?: string;
  /** 입금 마감 시점 (RFC 3339 date-time) */
  expiredAt?: string;
  /** 가상계좌 발급 시점 (RFC 3339 date-time) */
  issuedAt?: string;
  refundStatus?: Enum.PaymentMethodVirtualAccountRefundStatus;
};

/****************************/
/*      PaymentProduct      */
/****************************/
export interface PaymentProduct {
  /** 가맹점이 부여한 상품 식별자 */
  id: string;
  /** 상품명 */
  name: string;
  /** 상품 가격 */
  amount: number;
  /** 주문 수량 */
  quantity: number;
  /** 카테고리 등으로 활용 가능 */
  tag?: string;
  /** 상품 코드 */
  code?: string;
}

/***************************/
/*    PaymentTextSearch    */
/***************************/
export interface PaymentTextSearch {
  field: Enum.PaymentTextSearchField;
  value: string;
}

/****************************/
/*      PaymentWebhook      */
/****************************/
export interface PaymentWebhook {
  paymentStatus?: Enum.PaymentWebhookPaymentStatus;
  /** 웹훅 ID */
  id: string;
  status?: Enum.PaymentWebhookStatus;
  /** 웹훅 URL. v1 결제는 값이 존재하지 않음 */
  url: string;
  /** 비동기 웹훅 여부. v1 결제는 값이 존재하지 않음 */
  isAsync?: boolean;
  /** 현재 발송 횟수 */
  currentExecutionCount?: number;
  /** 최대 발송 횟수 */
  maxExecutionCount?: number;
  /** 웹훅 트리거. 수동 웹훅 재발송, 가상계좌 입금, 비동기 취소 승인 시 발생한 웹훅이면 필드값이 존재 */
  trigger?: Enum.PaymentWebhookTrigger;
  /** 웹훅 요청 정보 */
  request?: PaymentWebhookRequest;
  /** 웹훅 응답 정보 */
  response?: PaymentWebhookResponse;
  /** 웹훅 처리 시작 시점 (RFC 3339 date-time) */
  triggeredAt: string;
}

export interface PaymentWebhookRequest {
  /** 웹훅 요청 헤더 */
  header?: string;
  /** 웹훅 요청 본문 */
  body: string;
  /** 웹훅 요청 시점 (RFC 3339 date-time) */
  requestedAt?: string;
}

export interface PaymentWebhookResponse {
  /** 응답 HTTP 코드 */
  code: string;
  /** 웹훅 응답 헤더 */
  header: string;
  /** 웹훅 응답 본문 */
  body: string;
  /** 웹훅 응답 시점 (RFC 3339 date-time) */
  respondedAt: string;
}
