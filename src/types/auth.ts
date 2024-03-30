export type Token = {
  accessToken: string;
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
