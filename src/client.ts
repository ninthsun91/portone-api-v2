import axios, { AxiosInstance, CreateAxiosDefaults } from 'axios';
import qs from 'qs';
import _ from 'lodash';

import { CONSTANT } from './constants';
import { Jwt } from './utils/jwt';
import type { Request, Response, Token } from './types';

export interface PortOneOptions {
  apiSecret: string;
  baseUrl?: string;
  axiosConfig?: CreateAxiosDefaults;
}

export class PortOneClient {
  private baseUrl: string;
  private apiSecret: string;
  private apiInstance: AxiosInstance;
  private token: Token;

  constructor({ apiSecret, axiosConfig }: PortOneOptions) {
    this.apiSecret = apiSecret;
    this.baseUrl = axiosConfig?.baseURL || CONSTANT.BASE_URL;
    this.token = {
      accessToken: '',
      refreshToken: '',
    };

    this.apiInstance = axios.create({
      paramsSerializer: params => qs.stringify(params, { arrayFormat: 'brackets' }),
      ...axiosConfig,
      baseURL: this.baseUrl,
    });
  }

  public getApiInstance(): AxiosInstance {
    return this.apiInstance;
  }

  public async getHeaders() {
    const isValid = await this.verifyToken();
    return isValid ? {
      Authorization: `Bearer ${this.token.accessToken}`,
    } : {
      Authorization: `PortOne ${this.apiSecret}`,
    };
  }

  private async verifyToken() {
    try {
      const { accessToken, refreshToken } = this.token;
      if (Jwt.isValid(accessToken)) return true;

      if (Jwt.isValid(refreshToken)) {
        const { data } = await this.refreshToken();
        this.token = _.assign({}, data);
        return true;
      }

      const { data } = await this.issueToken();
      this.token = _.assign({}, data);
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  private async issueToken() {
    const data: Request.IssueToken = {
      apiSecret: this.apiSecret,
    };
    return axios.post<Response.IssueToken>(`${this.baseUrl}/login/api-secret`, data);
  }

  private async refreshToken() {
    const data: Request.RefreshToken = {
      refreshToken: this.token.refreshToken,
    };
    return axios.post<Response.RefreshToken>(`${this.baseUrl}/token/refresh`, data);
  }
}
