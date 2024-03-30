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
  addressLine1: string; // 상세주소 1
  addressLine2: string; // 상세주소 2
  city?: string; // 시/군/구
  province?: string; // 주/도/시
  country?: Enum.Country;
}

/************/
/*   Card   */
/************/
export type Card = {
  publisher?: string; // 발행사 코드
  issuer?: string; // 발급사 코드
  brand?: Enum.CardBrand; // 카드 브랜드
  type?: Enum.CardType; // 카드 유형
  ownerType?: Enum.CardOwnerType; // 카드 소유자 유형
  bin?: string; // 카드 번호 앞 6자리 또는 8자리 BIN
  name?: string; // 카드 상품명
  number?: string; // 마스킹된 카드 번호
};
export interface CardCredential {
  number: string; // 카드 번호
  expiryYear: string; // 유효 기간 만료 연도
  expiryMonth: string; // 유효 기간 만료 월
  birthOrBusinessRegistrationNumber?: string; // 생년월일 또는 사업자 등록 번호
  passwordTwoDigits?: string; // 비밀번호 앞 두자리
}

/***********/
/* Channel */
/***********/
export type SelectedChannel = {
  type: Enum.SelectedChannelType;
  id?: string; // 채널 ID
  key?: string; // 채널 키
  name?: string; // 채널 이름
  pgProvider: Enum.PgProvider; // PG사 결제 모듈
  pgMerchantId: string; // PG사 가맹점 식별 ID
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
  id?: string; // 고객사에서 관리하는 고객 ID
  name?: CustomerNameInput; // 두 가지 형식 full|separated 중 한 가지만 선택하여 입력
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
  full?: string; // 한 줄 이름 형식
  separated?: CustomerSeparatedName;
}
export interface CustomerSeparatedName {
  first: string;
  last: string;
}
