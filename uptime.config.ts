import { MaintenanceConfig, PageConfig, WorkerConfig } from './types/config'

const pageConfig: PageConfig = {
  title: 'XD Labs Status',
  links: [
    { link: 'https://xdlab.co', label: 'XD Labs' },
    { link: 'https://alchemytechgroup.com', label: 'Alchemy' },
    { link: 'https://www.respec.com', label: 'Respec' },
  ],
  group: {
    '🌐 Client Websites': [
      'alchemy-website',
      'alchemy-staging',
      'respec-website',
      'respec-billing',
    ],
    '🛠️ XD Labs Services': [
      'xdlab-website',
      'xdlab-feed',
    ],
    '🖥️ Servers': [
      'atg-server',
      'ubuntu-caddy-server',
    ],
  },
}

const workerConfig: WorkerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    // --- TIER 1: Client Websites ---
    {
      id: 'alchemy-website',
      name: 'Alchemy Website',
      method: 'GET',
      target: 'https://alchemytechgroup.com',
      tooltip: 'Alchemy Tech Group - Production',
      statusPageLink: 'https://alchemytechgroup.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'alchemy-staging',
      name: 'Alchemy Staging',
      method: 'GET',
      target: 'https://alchemy-staging.xdlab.co',
      tooltip: 'Alchemy Staging Environment',
      statusPageLink: 'https://alchemy-staging.xdlab.co',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'respec-website',
      name: 'Respec Website',
      method: 'GET',
      target: 'https://www.respec.com',
      tooltip: 'Respec - Production',
      statusPageLink: 'https://www.respec.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'respec-billing',
      name: 'Respec Billing',
      method: 'GET',
      target: 'https://billing.respec.com',
      tooltip: 'Respec Billing Portal',
      statusPageLink: 'https://billing.respec.com',
      expectedCodes: [200],
      timeout: 10000,
    },
    // --- TIER 1: XD Labs Services ---
    {
      id: 'xdlab-website',
      name: 'XD Lab Website',
      method: 'GET',
      target: 'https://xdlab.co',
      tooltip: 'XD Labs Company Site',
      statusPageLink: 'https://xdlab.co',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'xdlab-feed',
      name: 'XD Labs Feed',
      method: 'GET',
      target: 'https://feed.xdlab.co',
      tooltip: 'XD Labs Client Data Feed',
      statusPageLink: 'https://feed.xdlab.co',
      expectedCodes: [200],
      timeout: 10000,
    },
    // --- TIER 1: Server Pings ---
    {
      id: 'atg-server',
      name: 'ATG Server (DO NYC1)',
      method: 'GET',
      target: 'https://142.93.207.115',
      tooltip: 'DigitalOcean - ATG Caddy VPS',
      expectedCodes: [200, 301, 302, 308, 403, 404],
      timeout: 10000,
    },
    {
      id: 'ubuntu-caddy-server',
      name: 'Neptune (DO NYC3)',
      method: 'GET',
      target: 'https://174.138.79.105',
      tooltip: 'DigitalOcean - Respec/XDLabs VPS',
      expectedCodes: [200, 301, 302, 308, 403, 404],
      timeout: 10000,
    },
  ],
  notification: {
    webhook: {
      url: 'https://ntfy.xdlab.co/uptime-critical',
      method: 'POST',
      headers: {
        'Authorization': 'Bearer tk_i8w4t3mj1hxmp7nsopf5clwdukxtz',
        'Priority': 'urgent',
        'Tags': 'warning,rotating_light',
        'Title': 'UptimeFlare Alert',
      },
      payloadType: 'param',
      payload: {
        message: '$MSG',
      },
    },
    timeZone: 'America/Chicago',
    gracePeriod: 0,
  },
}

const maintenances: MaintenanceConfig[] = []

export { maintenances, pageConfig, workerConfig }
