import type { IdentityVerification, VerifiedIdentityVerification } from '../identity-verification';

export type FindIdentityVerification = IdentityVerification;

export interface SendIdentityVerification {}

export interface ConfirmIdentityVerification {
  /** 완료된 본인인증 내역 */
  identityVerification: VerifiedIdentityVerification;
}

export interface ResendIdentityVerification {}
