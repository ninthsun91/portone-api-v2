export {
  Country, Currency,
} from 'country-code-enum';

export const Bank = {
  BANK_OF_CHINA: 'BANK_OF_CHINA',
  KDB: 'KDB',
  KAKAO_PAY_SECURITIES: 'KAKAO_PAY_SECURITIES',
  SK_SECURITIES: 'SK_SECURITIES',
  HANA_SECURITIES: 'HANA_SECURITIES',
  KB_SECURITIES: 'KB_SECURITIES',
  KYONGNAM: 'KYONGNAM',
  CITI: 'CITI',
  SHINYOUNG_SECURITIES: 'SHINYOUNG_SECURITIES',
  KOREA_SECURITIES: 'KOREA_SECURITIES',
  SHINHAN: 'SHINHAN',
  UOB: 'UOB',
  KOREA_FOSS_SECURITIES: 'KOREA_FOSS_SECURITIES',
  MERITZ_SECURITIES: 'MERITZ_SECURITIES',
  MIZUHO: 'MIZUHO',
  EBEST_SECURITIES: 'EBEST_SECURITIES',
  IBK: 'IBK',
  DEUTSCHE: 'DEUTSCHE',
  KCIS: 'KCIS',
  KEXIM: 'KEXIM',
  SHINHYUP: 'SHINHYUP',
  CCB: 'CCB',
  HANA: 'HANA',
  TOSS_SECURITIES: 'TOSS_SECURITIES',
  SHINHAN_SECURITIES: 'SHINHAN_SECURITIES',
  HANHWA_SECURITIES: 'HANHWA_SECURITIES',
  LOCAL_NONGHYUP: 'LOCAL_NONGHYUP',
  WOORI: 'WOORI',
  SAMSUNG_SECURITIES: 'SAMSUNG_SECURITIES',
  K_BANK: 'K_BANK',
  DB_SECURITIES: 'DB_SECURITIES',
  SGI: 'SGI',
  JEJU: 'JEJU',
  MIRAE_ASSET_SECURITIES: 'MIRAE_ASSET_SECURITIES',
  SAVINGS_BANK: 'SAVINGS_BANK',
  EUGENE_SECURITIES: 'EUGENE_SECURITIES',
  DAEGU: 'DAEGU',
  SUHYUP: 'SUHYUP',
  CAPE_SECURITIES: 'CAPE_SECURITIES',
  JEONBUK: 'JEONBUK',
  BNP_PARIBAS: 'BNP_PARIBAS',
  KODIT: 'KODIT',
  BOCOM: 'BOCOM',
  DAOL_SECURITIES: 'DAOL_SECURITIES',
  NFCF: 'NFCF',
  HSBC: 'HSBC',
  STANDARD_CHARTERED: 'STANDARD_CHARTERED',
  KWANGJU: 'KWANGJU',
  ICBC: 'ICBC',
  TOSS: 'TOSS',
  HYUNDAI_MOTOR_SECURITIES: 'HYUNDAI_MOTOR_SECURITIES',
  BANK_OF_AMERICA: 'BANK_OF_AMERICA',
  BANK_OF_KOREA: 'BANK_OF_KOREA',
  NONGHYUP: 'NONGHYUP',
  HI_SECURITIES: 'HI_SECURITIES',
  KIBO: 'KIBO',
  KAKAO: 'KAKAO',
  KIWOON_SECURITIES: 'KIWOON_SECURITIES',
  BUSAN: 'BUSAN',
  NH_SECURITIES: 'NH_SECURITIES',
  MORGAN_STANLEY: 'MORGAN_STANLEY',
  KFCC: 'KFCC',
  BOOKOOK_SECURITIES: 'BOOKOOK_SECURITIES',
  MISC_FOREIGN: 'MISC_FOREIGN',
  YUANTA_SECURITIES: 'YUANTA_SECURITIES',
  POST: 'POST',
  DAISHIN_SECURITIES: 'DAISHIN_SECURITIES',
  KOOKMIN: 'KOOKMIN',
  MUFG: 'MUFG',
  JPMC: 'JPMC',
  KYOBO_SECURITIES: 'KYOBO_SECURITIES',
} as const;
export type Bank = typeof Bank[keyof typeof Bank];

export const CardBrand = {
  VISA: 'VISA',
  JCB: 'JCB',
  DINERS: 'DINERS',
  MASTER: 'MASTER',
  LOCAL: 'LOCAL',
  AMEX: 'AMEX',
  UNIONPAY: 'UNIONPAY',
} as const;
export type CardBrand = typeof CardBrand[keyof typeof CardBrand];

export const CardOwnerType = {
  PERSONAL: 'PERSONAL',
  CORPORATE: 'CORPORATE',
} as const;
export type CardOwnerType = typeof CardOwnerType[keyof typeof CardOwnerType];

export const CardType = {
  CREDIT: 'CREDIT',
  DEBIT: 'DEBIT',
  GIFT: 'GIFT',
} as const;
export type CardType = typeof CardType[keyof typeof CardType];

export const CashReceiptInputType = {
  PERSONAL: 'PERSONAL',
  CORPORATE: 'CORPORATE',
  NO_RECEIPT: 'NO_RECEIPT',
} as const;
export type CashReceiptInputType = typeof CashReceiptInputType[keyof typeof CashReceiptInputType];

export const CashReceiptType = {
  PERSONAL: 'PERSONAL',
  CORPORATE: 'CORPORATE',
} as const;
export type CashReceiptType = typeof CashReceiptType[keyof typeof CashReceiptType];

export const EasyPayProvider = {
  ALIPAY: 'ALIPAY',
  APPLEPAY: 'APPLEPAY',
  CHAI: 'CHAI',
  KB_APP: 'KB_APP',
  KAKAOPAY: 'KAKAOPAY',
  KPAY: 'KPAY',
  LGPAY: 'LGPAY',
  LPAY: 'LPAY',
  PAYCO: 'PAYCO',
  PINPAY: 'PINPAY',
  NAVERPAY: 'NAVERPAY',
  SAMSUNGPAY: 'SAMSUNGPAY',
  SKPAY: 'SKPAY',
  SSGPAY: 'SSGPAY',
  TOSS_BRANDPAY: 'TOSS_BRANDPAY',
  TOSSPAY: 'TOSSPAY',
} as const;
export type EasyPayProvider = typeof EasyPayProvider[keyof typeof EasyPayProvider];

export const Gender = {
  MALE: 'MALE',
  FEMALE: 'FEMALE',
  OTHER: 'OTHER',
} as const;
export type Gender = typeof Gender[keyof typeof Gender];

export const IdentityVerificationOperator = {
  SKT: 'SKT',
  KT: 'KT',
  LGU: 'LGU',
  KT_MVNO: 'KT_MVNO',
  LGU_MVNO: 'LGU_MVNO',
  SKT_MVNO: 'SKT_MVNO',
} as const;
export type IdentityVerificationOperator = typeof IdentityVerificationOperator[keyof typeof IdentityVerificationOperator];

export const IdentityVerificationMethod = {
  SMS: 'SMS',
  APP: 'APP',
} as const;
export type IdentityVerificationMethod = typeof IdentityVerificationMethod[keyof typeof IdentityVerificationMethod];

export const InstantPaymentMethodInputVirtualAccountOptionType = {
  NORMAL: 'NORMAL',
  FIXED: 'FIXED',
} as const;
export type InstantPaymentMethodInputVirtualAccountOptionType = typeof InstantPaymentMethodInputVirtualAccountOptionType[keyof typeof InstantPaymentMethodInputVirtualAccountOptionType];

export const PaymentCashReceiptStatus = {
  ISSUED: 'ISSUED',
  CANCELLED: 'CANCELLED',
} as const;
export type PaymentCashReceiptStatus = typeof PaymentCashReceiptStatus[keyof typeof PaymentCashReceiptStatus];

export const PaymentClientType = {
  SDK_MOBILE: 'SDK_MOBILE',
  SDK_PC: 'SDK_PC',
  API: 'API',
} as const;
export type PaymentClientType = typeof PaymentClientType[keyof typeof PaymentClientType];

export const PaymentFilterInputEscrowStatus = {
  CONFIRMED: 'CONFIRMED',
  REJECTED: 'REJECTED',
  CANCELLED: 'CANCELLED',
  REJECT_CONFIRMED: 'REJECT_CONFIRMED',
  DELIVERED: 'DELIVERED',
  REGISTERED: 'REGISTERED',
} as const;
export type PaymentFilterInputEscrowStatus = typeof PaymentFilterInputEscrowStatus[keyof typeof PaymentFilterInputEscrowStatus];

export const PaymentLogisticsCompany = {
  POST_REGISTERED: 'POST_REGISTERED',
  GOODSTOLUCK: 'GOODSTOLUCK',
  UPS: 'UPS',
  CJ_INTL: 'CJ_INTL',
  LOTTE: 'LOTTE',
  CHUNIL: 'CHUNIL',
  KGL: 'KGL',
  EMS: 'EMS',
  ILYANG: 'ILYANG',
  HAPDONG: 'HAPDONG',
  SUNGWON: 'SUNGWON',
  KUNYOUNG: 'KUNYOUNG',
  LOGEN: 'LOGEN',
  LX_PANTOS: 'LX_PANTOS',
  DHL: 'DHL',
  HANJIN: 'HANJIN',
  FEDEX: 'FEDEX',
  ACI: 'ACI',
  WOORI: 'WOORI',
  CJ: 'CJ',
  GS: 'GS',
  DONGWON: 'DONGWON',
  USPS: 'USPS',
  KYUNGDONG: 'KYUNGDONG',
  SF: 'SF',
  DAESIN: 'DAESIN',
  ETC: 'ETC',
  SLX: 'SLX',
  GSM_NTON: 'GSM_NTON',
  POST: 'POST',
} as const;
export type PaymentLogisticsCompany = typeof PaymentLogisticsCompany[keyof typeof PaymentLogisticsCompany];

export const PaymentMethodGiftCertificateType = {
  SMART_MUNSANG: 'SMART_MUNSANG',
  CULTUREGIFT: 'CULTUREGIFT',
  BOOKNLIFE: 'BOOKNLIFE',
  CULTURELAND: 'CULTURELAND',
  HAPPYMONEY: 'HAPPYMONEY',
} as const;
export type PaymentMethodGiftCertificateType = typeof PaymentMethodGiftCertificateType[keyof typeof PaymentMethodGiftCertificateType];

export const PaymentMethodType = {
  GIFT_CERTIFICATE: 'GIFT_CERTIFICATE',
  VERTUAL_ACCOUNT: 'VERTUAL_ACCOUNT',
  MOBILE: 'MOBILE',
  CARD: 'CARD',
  TRANSFER: 'TRANSFER',
  EASY_PAY: 'EASY_PAY',
} as const;
export type PaymentMethodType = typeof PaymentMethodType[keyof typeof PaymentMethodType];

export const PaymentMethodVirtualAccountRefundStatus = {
  PENDING: 'PENDING',
  PARTIAL_REFUND_FAILED: 'PARTIAL_REFUND_FAILED',
  FAILED: 'FAILED',
  COMPLETED: 'COMPLETED',
} as const;
export type PaymentMethodVirtualAccountRefundStatus = typeof PaymentMethodVirtualAccountRefundStatus[keyof typeof PaymentMethodVirtualAccountRefundStatus];

export const PaymentMethodVirtualAccountType = {
  FIXED: 'FIXED',
  NORMAL: 'NORMAL',
} as const;
export type PaymentMethodVirtualAccountType = typeof PaymentMethodVirtualAccountType[keyof typeof PaymentMethodVirtualAccountType];

export const PaymentProductType = {
  PHYSICAL: 'PHYSICAL',
  DIGITAL: 'DIGITAL',
} as const;
export type PaymentProductType = typeof PaymentProductType[keyof typeof PaymentProductType];

export const PaymentScheduleStatus = {
  SCHEDULED: 'SCHEDULED',
  STARTED: 'STARTED',
  FAILED: 'FAILED',
  REVOKED: 'REVOKED',
  SUCCEEDED: 'SUCCEEDED',
} as const;
export type PaymentScheduleStatus = typeof PaymentScheduleStatus[keyof typeof PaymentScheduleStatus];

export const PaymentSortBy = {
  REQUESTED_AT: 'REQUESTED_AT',
  STATUS_CHANGED_AT: 'STATUS_CHANGED_AT',
} as const;
export type PaymentSortBy = typeof PaymentSortBy[keyof typeof PaymentSortBy];

export const PaymentSortOrder = {
  ASC: 'ASC',
  DESC: 'DESC',
} as const;
export type PaymentSortOrder = typeof PaymentSortOrder[keyof typeof PaymentSortOrder];

export const PaymentStatus = {
  PAID: 'PAID',
  PARTIAL_CANCELLED: 'PARTIAL_CANCELLED',
  CANCELLED: 'CANCELLED',
  FAILED: 'FAILED',
  PAY_PENDING: 'PAY_PENDING',
  READY: 'READY',
  VIRTUAL_ACCOUNT_ISSUED: 'VIRTUAL_ACCOUNT_ISSUED',
} as const;
export type PaymentStatus = typeof PaymentStatus[keyof typeof PaymentStatus];

export const PaymentTextSearchField = {
  CUSTOMER_EMAIL: 'CUSTOMER_EMAIL',
  USER_AGENT: 'USER_AGENT',
  FAIL_REASON: 'FAIL_REASON',
  CARD_BIN: 'CARD_BIN',
  PG_MERCHANT_ID: 'PG_MERCHANT_ID',
  RECEIPT_APPROVAL_NUMBER: 'RECEIPT_APPROVAL_NUMBER',
  TRANS_BANK: 'TRANS_BANK',
  CARD_ISSUER: 'CARD_ISSUER',
  VIRTUAL_ACCOUNT_BANK: 'VIRTUAL_ACCOUNT_BANK',
  ORDER_NAME: 'ORDER_NAME',
  TX_ID: 'TX_ID',
  CARD_ACQUIRER: 'CARD_ACQUIRER',
  CANCEL_REASON: 'CANCEL_REASON',
  CUSTOMER_NAME: 'CUSTOMER_NAME',
  SCHEDULE_ID: 'SCHEDULE_ID',
  GIFT_CERTIFICATION_APPROVAL_NUMBER: 'GIFT_CERTIFICATION_APPROVAL_NUMBER',
  PROMOTION_ID: 'PROMOTION_ID',
  PAYMENT_ID: 'PAYMENT_ID',
  CARD_APPROVAL_NUMBER: 'CARD_APPROVAL_NUMBER',
  CUSTOMER_ADDRESS: 'CUSTOMER_ADDRESS',
  PG_CANCELLATION_ID: 'PG_CANCELLATION_ID',
  ALL: 'ALL',
  PG_RECEIPT_ID: 'PG_RECEIPT_ID',
  VIRTUAL_ACCOUNT_NUMBER: 'VIRTUAL_ACCOUNT_NUMBER',
  CARD_NUMBER: 'CARD_NUMBER',
  PG_TX_ID: 'PG_TX_ID',
  BILLING_KEY: 'BILLING_KEY',
  CUSTOMER_PHONE_NUMBER: 'CUSTOMER_PHONE_NUMBER',
  CARD_RECEIPT_NAME: 'CARD_RECEIPT_NAME',
  CARD_INSTALLMENT: 'CARD_INSTALLMENT',
  CUSTOMER_ZIPCODE: 'CUSTOMER_ZIPCODE',
  VIRTUAL_ACCOUNT_HOLDER_NAME: 'VIRTUAL_ACCOUNT_HOLDER_NAME',
} as const;
export type PaymentTextSearchField = typeof PaymentTextSearchField[keyof typeof PaymentTextSearchField];

export const PaymentTimestampType = {
  CREATED_AT: 'CREATED_AT',
  STATUS_CHANGED_AT: 'STATUS_CHANGED_AT',
} as const;
export type PaymentTimestampType = typeof PaymentTimestampType[keyof typeof PaymentTimestampType];

export const PaymentWebhookPaymentStatus = {
  VIRTUAL_ACCOUNT_ISSUED: 'VIRTUAL_ACCOUNT_ISSUED',
  PAID: 'PAID',
  READY: 'READY',
  FAILED: 'FAILED',
  PAY_PENDING: 'PAY_PENDING',
  CANCELLED: 'CANCELLED',
  PARTIAL_CANCELLED: 'PARTIAL_CANCELLED',
} as const;
export type PaymentWebhookPaymentStatus = typeof PaymentWebhookPaymentStatus[keyof typeof PaymentWebhookPaymentStatus];

export const PaymentWebhookStatus = {
  SUCCEEDED: 'SUCCEDDED',
  FAILED_NOT_OK_RESPONSE: 'FAILED_NOT_OK_RESPONSE',
  FAILED_UNEXPECTED_ERROR: 'FAILED_UNEXPECTED_ERROR',
} as const;
export type PaymentWebhookStatus = typeof PaymentWebhookStatus[keyof typeof PaymentWebhookStatus];

export const PaymentWebhookTrigger = {
  ASYNC_CANCEL_APPROVED: 'ASYNC_CANCEL_APPROVED',
  ASYNC_CANCEL_FAILED: 'ASYNC_CANCEL_FAILED',
  ASYNC_PAY_APPROVED: 'ASYNC_PAY_APPROVED',
  ASYNC_PAY_FAILED: 'ASYNC_PAY_FAILED',
  MANUAL: 'MANUAL',
  VIRTUAL_ACCOUNT_DEPOSIT: 'VIRTUAL_ACCOUNT_DEPOSIT',
} as const;
export type PaymentWebhookTrigger = typeof PaymentWebhookTrigger[keyof typeof PaymentWebhookTrigger];

export const PgProvider = {
  ALIPAY: 'ALIPAY',
  BLUEWALNUT: 'BLUEWALNUT',
  CHAI: 'CHAI',
  DANAL: 'DANAL',
  DANAL_TPAY: 'DANAL_TPAY',
  DAOU: 'DAOU',
  EXIMBAY: 'EXIMBAY',
  GALAXIA: 'GALAXIA',
  HTML5_INICIS: 'HTML5_INICIS',
  INICIS: 'INICIS',
  INICIS_V2: 'INICIS_V2',
  INICIS_UNIFIED: 'INICIS_UNIFIED',
  JTNET: 'JTNET',
  KAKAO: 'KAKAO',
  KAKAOPAY: 'KAKAOPAY',
  KCP: 'KCP',
  KCP_BILLING: 'KCP_BILLING',
  KCP_DIRECT: 'KCP_DIRECT',
  KCP_QUICK: 'KCP_QUICK',
  KICC: 'KICC',
  KPN: 'KPN',
  KSNET: 'KSNET',
  PAYCO: 'PAYCO',
  PAYMENTWALL: 'PAYMENTWALL',
  PAYPAL: 'PAYPAL',
  PAYPAL_V2: 'PAYPAL_V2',
  PAYPLE: 'PAYPLE',
  PINPAY: 'PINPAY',
  MOBILIANS: 'MOBILIANS',
  NAVERCO: 'NAVERCO',
  NAVERPAY: 'NAVERPAY',
  NICE: 'NICE',
  NICE_V2: 'NICE_V2',
  SETTLE: 'SETTLE',
  SETTLE_ACC: 'SETTLE_ACC',
  SETTLE_FIRM: 'SETTLE_FIRM',
  SMARTRO: 'SMARTRO',
  SMARTRO_V2: 'SMARTRO_V2',
  SMILEPAY: 'SMILEPAY',
  SYRUP: 'SYRUP',
  TOSSPAY: 'TOSSPAY',
  TOSSPAY_V2: 'TOSSPAY_V2',
  TOSS_BRANDPAY: 'TOSS_BRANDPAY',
  TOSSPAYMENTS: 'TOSSPAYMENTS',
  UPLUS: 'UPLUS',
  WELCOME: 'WELCOME',
} as const;
export type PgProvider = typeof PgProvider[keyof typeof PgProvider];

export const PortOneVersion = {
  V1: 'V1',
  V2: 'V2',
} as const;
export type PortOneVersion = typeof PortOneVersion[keyof typeof PortOneVersion];

export const SelectedChannelType = {
  LIVE: 'LIVE',
  TEST: 'TEST',
} as const;
export type SelectedChannelType = typeof SelectedChannelType[keyof typeof SelectedChannelType];
