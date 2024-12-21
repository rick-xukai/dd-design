/* eslint-disable */
import axios from 'axios';

export const defaultHeaders = {
  'Content-Type': 'application/json',
};

const defaultOptions = {
  method: 'GET',
  headers: defaultHeaders,
};

export class RequestClientClass {
  baseUrl: string | undefined;
  fetch: typeof axios;
  headers: any;
  payload: any;
  uri: string;
  queryUrl: any;
  requireHeadersReturn: boolean;
  responseType: string;

  constructor(baseUrl: string | undefined, fetch = axios) {
    this.baseUrl = baseUrl;
    this.fetch = fetch;
    this.headers = defaultOptions.headers;
    this.payload = '';
    this.uri = '';
    this.queryUrl = {};
    this.requireHeadersReturn = false;
    this.responseType = '';
  }

  setUri(uri: string) {
    this.uri = uri;
    return this;
  }

  setHeaders(headers: any) {
    this.headers = { ...this.headers, ...headers };
    return this;
  }

  setPayload(payload: any) {
    this.payload = payload;
    return this;
  }

  async doMethod(method = 'GET') {
    const options: any = {
      baseURL: this.baseUrl,
      url: this.uri,
      ...defaultOptions,
      headers: this.headers,
      responseType: this.responseType,
      method,
    };

    if (method === 'GET') {
      options.params = this.queryUrl;
    }

    if (
      method === 'POST' ||
      method === 'PUT' ||
      method === 'DELETE' ||
      method === 'PATCH'
    ) {
      options.data = this.payload;
    }

    const response = await this.fetch(options);
    const finalResponse = response.data;
    if (this.requireHeadersReturn) {
      const finalHeaders = {
        ...response.headers,
        ...finalResponse.headers,
      };
      finalResponse.headers = finalHeaders;
    }
    return finalResponse;
  }

  doPost() {
    return this.doMethod('POST');
  }

  doPut() {
    return this.doMethod('PUT');
  }

  doGet() {
    return this.doMethod('GET');
  }

  doDelete() {
    return this.doMethod('DELETE');
  }

  doPatch() {
    return this.doMethod('PATCH');
  }
}
