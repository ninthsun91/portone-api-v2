export type Token = {
  /** 인증에 사용하는 access token. 하루의 유효기간 */
  accessToken: string;
  /** 토큰 재발급 및 연장을 위한 refresh token. 일주일의 유효기간 */
  refreshToken: string;
};

export type AccessTokenPayload = {
  user_id: string;
  merchant_service: {
    include_permissions: boolean;
    merchant_id: string;
    store_id: string;
    belong_to: string;
    permissions: string[];
    whitelist: any[]
  },
  custom_payload: object;
};
