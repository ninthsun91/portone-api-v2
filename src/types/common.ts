import type * as Enum from './enums';

/***************************/
/*         Address         */
/***************************/
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

/****************************/
/*           Bank           */
/****************************/
export interface BankInfo {
  /** 은행 코드 */
  bank: Enum.Bank;
  /** 은행 이름 */
  name: BankInfoName;
}

export interface BankInfoName {
  ko: string;
}

/****************************/
/*           Card           */
/****************************/
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

/***************************/
/*         Channel         */
/***************************/
export interface SelectedChannel {
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
export interface ChannelGroupSummary {
  /** 채널 그룹 ID */
  id: string;
  /** 채널 그룹 이름 */
  name: string;
  /** 테스트 채널 그룹 여부 */
  isForTest: boolean;
};
export type ChannelSpecificFailure = ChannelSpecificFailureInvalidRequest | ChannelSpecificFailurePgProvider;
export interface ChannelSpecificFailureInvalidRequest {
  type: 'INVALID_REQUEST';
  /** 결제, 본인인증 등에 선택된 채널 정보 */
  channel: SelectedChannel;
  message?: string;
}
export interface ChannelSpecificFailurePgProvider {
  type: 'PG_PROVIDER';
  /** 결제, 본인인증 등에 선택된 채널 정보 */
  channel: SelectedChannel;
  message?: string;
  pgCode: string;
  pgMessage: string;
}


/****************************/
/*         Customer         */
/****************************/
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

/***************************/
/*      DateTimeRange      */
/***************************/
export interface DateTimeRange {
  /** RFC 3339 date-time */
  from: string;
  /** RFC 3339 date-time */
  until: string;
}

/****************************/
/*         PageInfo         */
/****************************/
export interface PageInfo {
  /** 요청된 페이지 번호 (int32) */
  number: number;
  /** 요청된 페이지 당 객체 수 (int32) */
  size: number;
  /** 실제 반환된 객체 수 (int32) */
  totalCount: number;
}

export interface PageInput {
  /** 0부터 시작하는 페이지 번호 (int32) */
  number?: number;
  /** 각 페이지 당 포함할 객체 수 */
  size?: number;
}
