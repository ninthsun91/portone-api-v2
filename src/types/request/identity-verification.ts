import * as Enum from '../enums';
import type { SendIdentityVerificationBodyCustomer } from '../identity-verification';

export interface FindIdentityVerification { }

export interface SendIdentityVerification {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** 채널 키 */
  channelKey: string;
  /** 본인인증 요청 고객 정보 */
  customer: SendIdentityVerificationBodyCustomer;
  /** 사용자 지정 데이터 */
  customData?: string;
  /** PG사별 추가 파라미터 */
  bypass?: object;
  /** 본인인증 통신사 */
  operator: Enum.IdentityVerificationOperator;
  /** 본인인증 방식 */
  method: Enum.IdentityVerificationMethod;
}

export interface ConfirmIdentityVerification {
  /** 상점 ID. 미입력 시 토큰에 담긴 값 사용 */
  storeId?: string;
  /** OTP. SMS 방식에서만 사용 */
  otp?: string;
}

export interface ResendIdentityVerification { }
