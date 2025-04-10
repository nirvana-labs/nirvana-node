// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'api_keys',
  operation: 'read',
  tags: [],
};

export const tool: Tool = {
  name: 'get_api_keys',
  description: 'Get details about an API key',
  inputSchema: {
    type: 'object',
    properties: {
      api_key_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { api_key_id } = args;
  return client.apiKeys.get(api_key_id);
};

export default { metadata, tool, handler };
