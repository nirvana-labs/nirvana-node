// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from '@nirvana-labs/nirvana';
import { Response } from 'node-fetch';

const client = new NirvanaLabs({
  apiKey: 'My API Key',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firewallRules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.networking.firewallRules.create('vpc_id', {
      destination_address: '0.0.0.0/0',
      destination_ports: ['22', '80', '443'],
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source_address: '0.0.0.0/0',
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('create: required and optional params', async () => {
    const response = await client.networking.firewallRules.create('vpc_id', {
      destination_address: '0.0.0.0/0',
      destination_ports: ['22', '80', '443'],
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source_address: '0.0.0.0/0',
    });
  });

  test('update', async () => {
    const responsePromise = client.networking.firewallRules.update('vpc_id', 'firewall_rule_id', {});
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list', async () => {
    const responsePromise = client.networking.firewallRules.list('vpc_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('list: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networking.firewallRules.list('vpc_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.networking.firewallRules.delete('vpc_id', 'firewall_rule_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('delete: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networking.firewallRules.delete('vpc_id', 'firewall_rule_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });

  test('get', async () => {
    const responsePromise = client.networking.firewallRules.get('vpc_id', 'firewall_rule_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('get: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.networking.firewallRules.get('vpc_id', 'firewall_rule_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });
});
