import type * as Enum from './enums';

/***********/
/* Address */
/***********/
export type Address = {
  type: 'ONE_LINE' | 'SEPARATED';
  oneLine: string;
};
export type OneLineAddress = Address;
export type SeparatedAddress = Address & SeparatedAddressInput;
export interface SeparatedAddressInput {
  /** 상세주소 1 */
  addressLine1: string;
  /** 상세주소 2 */
  addressLine2: string;
  /** 시/군/구 */
  city?: string;
  /** 주/도/시 */
  province?: string;
  country?: Enum.Country;
}

/************/
/*   Card   */
/************/
export type Card = {
  /** 발행사 코드 */
  publisher?: string;
  /** 발급사 코드 */
  issuer?: string;
  /** 카드 브랜드 */
  brand?: Enum.CardBrand;
  /** 카드 유형 */
  type?: Enum.CardType;
  /** 카드 소유자 유형 */
  ownerType?: Enum.CardOwnerType;
  /** 카드 번호 앞 6자리 또는 8자리 BIN */
  bin?: string;
  /** 카드 상품명 */
  name?: string;
  /** 카드 마스킹 번호 */
  number?: string;
};
export interface CardCredential {
  /** 카드 번호 */
  number: string;
  /** 카드 유효 기간 만료 연도 */
  expiryYear: string;
  /** 카드 유효 기간 만료 월 */
  expiryMonth: string;
  /** 생년월일 또는 사업자등록번호 */
  birthOrBusinessRegistrationNumber?: string;
  /** 비밀번호 앞 2자리 */
  passwordTwoDigits?: string;
}

/***********/
/* Channel */
/***********/
export type SelectedChannel = {
  type: Enum.SelectedChannelType;
  /** 채널 ID */
  id?: string;
  /** 채널 키 */
  key?: string;
  /** 채널 이름 */
  name?: string;
  /** pg사 결제 모듈 */
  pgProvider: Enum.PgProvider;
  /** pg사 가맹점 식별 ID */
  pgMerchantId: string;
};

/************/
/* Customer */
/************/
export interface Customer {
  id?: string;
  name?: string;
  birthYear?: string;
  gender?: Enum.Gender;
  email?: string;
  phoneNumber?: string;
  address?: Address;
  zipcode?: string;
}
export interface CustomerInput {
  /** 고객사에서 관리하는 고객 ID */
  id?: string;
  /** 두 가지 형식 full|separated 중 한 가지만 선택하여 입력 */
  name?: CustomerNameInput;
  birthYear?: string;
  birthMonth?: string;
  birthDay?: string;
  country?: Enum.Country;
  gender?: Enum.Gender;
  email?: string;
  phoneNumber?: string;
  address?: SeparatedAddressInput;
  zipCode?: string;
  businessRegistrationNumber?: string;
}
export interface CustomerNameInput {
  /** 한 줄 이름 형식 */
  full?: string;
  separated?: CustomerSeparatedName;
}
export interface CustomerSeparatedName {
  first: string;
  last: string;
}

/*****************/
/* DateTimaRange */
/*****************/
export interface DateTimeRange {
  /** RFC 3339 date-time */
  from: string;
  /** RFC 3339 date-time */
  until: string;
}
