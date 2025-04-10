// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as OperationsAPI from '../../operations';
import * as Shared from '../../shared';
import * as OSImagesAPI from './os-images';
import { OSImageListResponse, OSImages } from './os-images';
import * as VolumesAPI from './volumes';
import { Volumes } from './volumes';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class VMs extends APIResource {
  volumes: VolumesAPI.Volumes = new VolumesAPI.Volumes(this._client);
  osImages: OSImagesAPI.OSImages = new OSImagesAPI.OSImages(this._client);

  /**
   * Create a VM
   */
  create(body: VMCreateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.post('/v1/compute/vms', { body, ...options });
  }

  /**
   * Update a VM
   */
  update(vmID: string, body: VMUpdateParams, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.patch(path`/v1/compute/vms/${vmID}`, { body, ...options });
  }

  /**
   * List all VMs
   */
  list(options?: RequestOptions): APIPromise<VMList> {
    return this._client.get('/v1/compute/vms', options);
  }

  /**
   * Delete a VM
   */
  delete(vmID: string, options?: RequestOptions): APIPromise<OperationsAPI.Operation> {
    return this._client.delete(path`/v1/compute/vms/${vmID}`, options);
  }

  /**
   * Get details about a VM
   */
  get(vmID: string, options?: RequestOptions): APIPromise<VM> {
    return this._client.get(path`/v1/compute/vms/${vmID}`, options);
  }
}

/**
 * CPU configuration details.
 */
export interface CPUConfig {
  /**
   * virtual CPUs
   */
  vcpu: number;
}

/**
 * Memory configuration details.
 */
export interface MemoryConfig {
  /**
   * memory size
   */
  size: number;
}

export interface OSImage {
  created_at: string;

  display_name: string;

  name: string;
}

/**
 * SSH key details.
 */
export interface SSHKey {
  public_key: string;
}

/**
 * VM details.
 */
export interface VM {
  id: string;

  boot_volume_id: string;

  /**
   * CPU configuration details.
   */
  cpu_config: CPUConfig;

  created_at: string;

  data_volume_ids: Array<string>;

  /**
   * Memory configuration details.
   */
  memory_config: MemoryConfig;

  name: string;

  private_ip: string | null;

  public_ip: string | null;

  region: Shared.RegionName;

  status: Shared.ResourceStatus;

  subnet_id: string;

  updated_at: string;

  vpc_id: string;

  vpc_name: string;
}

export interface VMList {
  items: Array<VM>;
}

export interface VMCreateParams {
  /**
   * Boot volume create request.
   */
  boot_volume: VMCreateParams.BootVolume;

  /**
   * CPU configuration details.
   */
  cpu_config: CPUConfig;

  /**
   * Memory configuration details.
   */
  memory_config: MemoryConfig;

  name: string;

  os_image_name: string;

  public_ip_enabled: boolean;

  region: Shared.RegionName;

  /**
   * SSH key details.
   */
  ssh_key: SSHKey;

  subnet_id: string;

  data_volumes?: Array<VMCreateParams.DataVolume>;
}

export namespace VMCreateParams {
  /**
   * Boot volume create request.
   */
  export interface BootVolume {
    size: number;
  }

  /**
   * VM data volume create request.
   */
  export interface DataVolume {
    name: string;

    size: number;
  }
}

export interface VMUpdateParams {
  /**
   * CPU configuration details.
   */
  cpu_config?: CPUConfig;

  /**
   * Memory configuration details.
   */
  memory_config?: MemoryConfig;

  name?: string;

  public_ip_enabled?: boolean;
}

VMs.Volumes = Volumes;
VMs.OSImages = OSImages;

export declare namespace VMs {
  export {
    type CPUConfig as CPUConfig,
    type MemoryConfig as MemoryConfig,
    type OSImage as OSImage,
    type SSHKey as SSHKey,
    type VM as VM,
    type VMList as VMList,
    type VMCreateParams as VMCreateParams,
    type VMUpdateParams as VMUpdateParams,
  };

  export { Volumes as Volumes };

  export { OSImages as OSImages, type OSImageListResponse as OSImageListResponse };
}
