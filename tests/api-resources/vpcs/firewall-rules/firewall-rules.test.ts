// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import Nirvana from 'nirvana';
import { Response } from 'node-fetch';

const client = new Nirvana({
  bearerToken: 'My Bearer Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource firewallRules', () => {
  test('create: only required params', async () => {
    const responsePromise = client.vpcs.firewallRules.create('vpc_id', {
      destination: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
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
    const response = await client.vpcs.firewallRules.create('vpc_id', {
      destination: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
    });
  });

  test('retrieve', async () => {
    const responsePromise = client.vpcs.firewallRules.retrieve('vpc_id', 'firewall_rule_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('retrieve: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.vpcs.firewallRules.retrieve('vpc_id', 'firewall_rule_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nirvana.NotFoundError);
  });

  test('update: only required params', async () => {
    const responsePromise = client.vpcs.firewallRules.update('vpc_id', 'firewall_rule_id', {
      destination: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
    });
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('update: required and optional params', async () => {
    const response = await client.vpcs.firewallRules.update('vpc_id', 'firewall_rule_id', {
      destination: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
      name: 'my-firewall-rule',
      protocol: 'tcp',
      source: { address: '0.0.0.0/0', ports: ['22', '80', '443'] },
    });
  });

  test('list', async () => {
    const responsePromise = client.vpcs.firewallRules.list('vpc_id');
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
      client.vpcs.firewallRules.list('vpc_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nirvana.NotFoundError);
  });

  test('delete', async () => {
    const responsePromise = client.vpcs.firewallRules.delete('vpc_id', 'firewall_rule_id');
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
      client.vpcs.firewallRules.delete('vpc_id', 'firewall_rule_id', { path: '/_stainless_unknown_path' }),
    ).rejects.toThrow(Nirvana.NotFoundError);
  });
});
