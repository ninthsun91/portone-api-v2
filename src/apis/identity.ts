import { PortOneRequest } from '../request';
import { PortOneClient } from '../client';
import type { Request, Response } from '../types';

export class Identity extends PortOneRequest {
  constructor(portone: PortOneClient) {
    super(portone);
  }

  /**
   * 본인인증 단건 조회
   * @param identityVerificationId 조회할 본인인증 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async find(identityVerificationId: string, storeId?: string) {
    return this.request<Response.FindIdentityVerification>({
      method: 'GET',
      url: this.setQuery(`/identity-verifications/${identityVerificationId}`, { storeId }),
    });
  }

  /**
   * 본인인증 요청 전송
   * @param identityVerificationId 본인인증 ID
   */
  public async send(identityVerificationId: string, data: Request.SendIdentityVerification) {
    return this.request<undefined>({
      method: 'POST',
      url: `/identity-verifications/${identityVerificationId}/send`,
      data,
    });
  }

  /**
   * 본인인증 확인
   * @param identityVerificationId 본인인증 ID
   */
  public async confirm(identityVerificationId: string, data: Request.ConfirmIdentityVerification) {
    return this.request<Response.ConfirmIdentityVerification>({
      method: 'POST',
      url: `/identity-verifications/${identityVerificationId}/confirm`,
      data,
    });
  }

  /**
   * SMS 본인인증 요청 재전송
   * @param identityVerificationId 본인인증 ID
   * @param storeId 상점 ID. 미입력 시 토큰에 담긴 값 사용
   */
  public async resend(identityVerificationId: string, storeId?: string) {
    return this.request<undefined>({
      method: 'POST',
      url: this.setQuery(`/identity-verifications/${identityVerificationId}/resend`, { storeId }),
    });
  }
}
