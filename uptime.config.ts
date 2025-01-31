const pageConfig = {
  title: "SSUG Status",
  links: [
    { link: 'https://www.ssug.top', label: 'SSUG Official Website' },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 5,
  monitors: [
    {
      id: "ssug-website",
      name: "SSUG Website",
      method: 'GET',
      target: 'https://www.ssug.top/',
      tooltip: 'The SSUG Official Website',
      statusPageLink: 'https://www.ssug.top/',
      timeout: 5000,
    },
    {
      id: "ssug-central-matrix-server",
      name: "SSUG Central Matrix Server",
      method: 'GET',
      target: 'https://matrix.ssug.top/_matrix/static/',
      tooltip: 'The SSUG Central Matrix Server',
      timeout: 5000,
    },
    {
      id: "ssug-element-web",
      name: "SSUG Element Web",
      method: 'GET',
      target: 'https://element.ssug.top',
      tooltip: 'The SSUG Element Web Client',
      statusPageLink: 'https://element.ssug.top',
      timeout: 5000,
    },
    {
      id: "ssug-sso-front_end",
      name: "SSUG SSO Service (Front-end)",
      method: 'GET',
      target: 'https://sso.ssug.top',
      tooltip: 'The Front-end of SSUG SSO Service',
      statusPageLink: 'https://sso.ssug.top',
      timeout: 5000,
    },
    {
      id: "ssug-sso-back-end",
      name: "SSUG SSO Service (Back-end)",
      method: 'GET',
      target: 'https://api.sso.ssug.top/status_check',
      tooltip: 'The Back-end of SSUG SSO Service',
      timeout: 5000,
    },
    {
      id: "ssug-law",
      name: "SSUG Laws Database",
      method: 'GET',
      target: 'https://law.ssug.top',
      tooltip: 'The SSUG Laws Database',
      statusPageLink: 'https://law.ssug.top',
      timeout: 5000,
    },
    {
      id: "ssug-sso-oauth",
      name: "SSUG SSO Service (OAuth)",
      method: 'GET',
      target: 'https://oauth.ssug.top',
      tooltip: 'The OAuth Part of SSUG SSO Service',
      timeout: 5000,
    },
    {
      id: "ssug-nav",
      name: "SSUG Homepage",
      method: 'GET',
      target: 'https://nav.ssug.top',
      tooltip: 'The SSUG Official Navigation Website',
      statusPageLink: 'https://nav.ssug.top',
      timeout: 5000,
    },
    {
      id: "ssug-ai",
      name: "SSUG AI Service (Open WebUI)",
      method: 'GET',
      target: 'https://ai.ssug.top',
      tooltip: 'The SSUG Official AI Model Provider Based on OpenWebUI',
      statusPageLink: 'https://ai.ssug.top',
      timeout: 5000,
    },
    {
      id: "ssug-fatpaper",
      name: "SSUG Fatpaper Game",
      method: 'GET',
      target: 'http://fatpaper.game.ssug.top',
      tooltip: 'The SSUG Official Game Website',
      statusPageLink: 'http://fatpaper.game.ssug.top',
      timeout: 5000,
    }
  ],
  notification: {
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 状态变化回调处理
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // 事件处理回调
    },
  },
}

// Don't forget this, otherwise compilation fails.
export { pageConfig, workerConfig }
