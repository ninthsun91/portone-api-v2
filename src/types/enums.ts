export {
  Country, Currency,
} from 'country-code-enum';

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
