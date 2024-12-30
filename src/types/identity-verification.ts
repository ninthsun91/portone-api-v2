import * as Enum from './enums';
import type { SelectedChannel } from './common';

export type IdentityVerification =
  | FailedIdentityVerification
  | ReadyIdentityVerification
  | VerifiedIdentityVerification;

export interface IdentityVerificationBase {
  /** 본인인증 상태 */
  status: 'READY' | 'VERIFIED' | 'FAILED';
  /** 본인인증 내역 ID */
  id: string;
  /** 본인인증에 선택된 채널 정보 */
  channel?: SelectedChannel;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** 본인인증 요청 시점 (RFC 3339 date-time) */
  requestedAt: string;
  /** 업데이트 시점 (RFC 3339 date-time) */
  updatedAt: string;
  /** 상태 업데이트 시점 (RFC 3339 date-time) */
  statusChangedAt: string;
}

export interface FailedIdentityVerification extends IdentityVerificationBase {
  status: 'FAILED';
  /** 요청 시 고객 정보 */
  requestedCustomer: IdentityVerificationRequestedCustomer;
  /** 본인인증 실패 사유 */
  failure: IdentityVerificationFailure;
}

export interface ReadyIdentityVerification extends IdentityVerificationBase {
  status: 'READY';
  /** 요청 시 고객 정보 */
  requestedCustomer: IdentityVerificationRequestedCustomer;
}

export interface VerifiedIdentityVerification extends IdentityVerificationBase {
  status: 'VERIFIED';
  /** 본인인증 완료 시 고객 정보 */
  verifiedCustomer: IdentityVerificationVerifiedCustomer;
  /** 본인인증 완료 시점 (RFC 3339 date-time) */
  verifiedAt: string;
  /** 본인인증 내역 PG사 ID */
  pgTxId: string;
  /** PG사 응답 데이터 */
  pgRawResponse: string;
}

export interface IdentityVerificationFailure {
  /** 실패 사유 */
  reason?: string;
  /** PG사 오류 코드 */
  pgCode?: string;
  /** PG사 오류 메시지 */
  pgMessage?: string;
}

export interface IdentityVerificationRequestedCustomer {
  /** 식별 ID */
  id?: string;
  /** 이름 */
  name?: string;
  /** 전화번호. 특수문자(-) 없이 숫자로만 이루어진 형식 */
  phoneNumber?: string;
}

export interface IdentityVerificationVerifiedCustomer {
  /** 식별 ID */
  id?: string;
  /** 이름 */
  name: string;
  /** 전화번호. 특수문자(-) 없이 숫자로만 이루어진 형식 */
  phoneNumber?: string;
  /** 생년월일. yyyy-MM-dd 형식 */
  birthDate: string;
  /** 성별 */
  gender: Enum.Gender;
  /** 외국인 여부 */
  isForeigner?: boolean;
  /** CI (개인 고유 식별키) */
  ci: string;
  /** DI (사이트별 개인 고유 식별키) */
  di: string;
}

export interface SendIdentityVerificationBodyCustomer {
  /** 식별 ID */
  id?: string;
  /** 이름 */
  name: string;
  /** 전화번호. 특수문자(-) 없이 숫자로만 이루어진 형식 */
  phoneNumber: string;
  /** 주민등록번호 앞 7자리. SMS 방식인 경우 필수 입력 */
  identityNumber?: string;
  /** 고객의 요청속도 제한에 사용 */
  ipAddress?: string;
}
