// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { Tool } from '@modelcontextprotocol/sdk/types.js';
import type { Metadata } from '../../';
import NirvanaLabs from '@nirvana-labs/nirvana';

export const metadata: Metadata = {
  resource: 'networking.firewall_rules',
  operation: 'write',
  tags: [],
};

export const tool: Tool = {
  name: 'delete_networking_firewall_rules',
  description: 'Delete a firewall rule',
  inputSchema: {
    type: 'object',
    properties: {
      vpc_id: {
        type: 'string',
      },
      firewall_rule_id: {
        type: 'string',
      },
    },
  },
};

export const handler = (client: NirvanaLabs, args: any) => {
  const { vpc_id, firewall_rule_id } = args;
  return client.networking.firewallRules.delete(vpc_id, firewall_rule_id);
};

export default { metadata, tool, handler };
