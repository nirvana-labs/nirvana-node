// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import NirvanaLabs from 'nirvana';
import { Response } from 'node-fetch';

const client = new NirvanaLabs({
  authToken: 'My Auth Token',
  baseURL: process.env['TEST_API_BASE_URL'] ?? 'http://127.0.0.1:4010',
});

describe('resource operations', () => {
  test('operations', async () => {
    const responsePromise = client.firewallRules.operations.operations('vpc_id', 'operation_id');
    const rawResponse = await responsePromise.asResponse();
    expect(rawResponse).toBeInstanceOf(Response);
    const response = await responsePromise;
    expect(response).not.toBeInstanceOf(Response);
    const dataAndResponse = await responsePromise.withResponse();
    expect(dataAndResponse.data).toBe(response);
    expect(dataAndResponse.response).toBe(rawResponse);
  });

  test('operations: request options instead of params are passed correctly', async () => {
    // ensure the request options are being passed correctly by passing an invalid HTTP method in order to cause an error
    await expect(
      client.firewallRules.operations.operations('vpc_id', 'operation_id', {
        path: '/_stainless_unknown_path',
      }),
    ).rejects.toThrow(NirvanaLabs.NotFoundError);
  });
});
