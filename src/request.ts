import _ from 'lodash';
import { PortOneClient } from './client';
import type { AxiosInstance, AxiosRequestConfig } from 'axios';

export class PortOneRequest {
  private axios: AxiosInstance;

  constructor(
    private readonly portOne: PortOneClient,
  ) {
    this.axios = portOne.getApiInstance();
  }

  protected async request<T>(config: RequestConfig) {
    const newConfig = await this.setConfig(config);
    return this.axios.request<T>(newConfig);
  }

  private async setConfig(config: AxiosRequestConfig) {
    const headers = await this.portOne.getHeaders();
    return _.merge({}, config, { headers });
  }
}

interface RequestConfig extends AxiosRequestConfig {
  method: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  url: string;
}
