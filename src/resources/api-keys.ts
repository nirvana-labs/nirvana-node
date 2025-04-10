// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../core/resource';
import { APIPromise } from '../core/api-promise';
import { buildHeaders } from '../internal/headers';
import { RequestOptions } from '../internal/request-options';
import { path } from '../internal/utils/path';

export class APIKeys extends APIResource {
  /**
   * Create a new API key
   */
  create(body: APIKeyCreateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.post('/v1/api_keys', { body, ...options });
  }

  /**
   * Update an API key's name
   */
  update(apiKeyID: string, body: APIKeyUpdateParams, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.patch(path`/v1/api_keys/${apiKeyID}`, { body, ...options });
  }

  /**
   * List all API keys you created
   */
  list(options?: RequestOptions): APIPromise<APIKeyList> {
    return this._client.get('/v1/api_keys', options);
  }

  /**
   * Delete an API key
   */
  delete(apiKeyID: string, options?: RequestOptions): APIPromise<void> {
    return this._client.delete(path`/v1/api_keys/${apiKeyID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Get details about an API key
   */
  get(apiKeyID: string, options?: RequestOptions): APIPromise<APIKey> {
    return this._client.get(path`/v1/api_keys/${apiKeyID}`, options);
  }
}

/**
 * API key response.
 */
export interface APIKey {
  /**
   * API key ID.
   */
  id: string;

  /**
   * Time on which the API key was created.
   */
  created_at: string;

  /**
   * Time after which the API key is not valid.
   */
  expires_at: string;

  /**
   * API key name.
   */
  name: string;

  /**
   * Status of the API key.
   */
  status: 'active' | 'inactive' | 'expired';

  /**
   * Time on which the API key was updated.
   */
  updated_at: string;

  /**
   * User ID that owns the API key.
   */
  user_id: string;

  /**
   * API key.
   */
  key?: string;

  /**
   * Time before which the API key is not valid.
   */
  starts_at?: string;
}

export interface APIKeyList {
  items: Array<APIKey>;
}

export interface APIKeyCreateParams {
  /**
   * Time after which the API key is not valid.
   */
  expires_at: string;

  /**
   * API key name.
   */
  name: string;

  /**
   * Time before which the API key is not valid.
   */
  starts_at?: string;
}

export interface APIKeyUpdateParams {
  /**
   * API key name.
   */
  name?: string;
}

export declare namespace APIKeys {
  export {
    type APIKey as APIKey,
    type APIKeyList as APIKeyList,
    type APIKeyCreateParams as APIKeyCreateParams,
    type APIKeyUpdateParams as APIKeyUpdateParams,
  };
}
