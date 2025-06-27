## GitHub Copilot Chat

- Extension Version: 0.28.2 (prod)
- VS Code: vscode/1.101.1
- OS: Mac

## Network

User Settings:
```json
  "github.copilot.advanced.debug.useElectronFetcher": true,
  "github.copilot.advanced.debug.useNodeFetcher": false,
  "github.copilot.advanced.debug.useNodeFetchFetcher": true
```

Connecting to https://api.github.com:
- DNS ipv4 Lookup: 20.27.177.116 (35 ms)
- DNS ipv6 Lookup: ::ffff:20.27.177.116 (24 ms)
- Proxy URL: None (180 ms)
- Electron fetch (configured): HTTP 200 (13 ms)
- Node.js https: HTTP 200 (110 ms)
- Node.js fetch: HTTP 200 (235 ms)
- Helix fetch: HTTP 200 (286 ms)

Connecting to https://api.githubcopilot.com/_ping:
- DNS ipv4 Lookup: 140.82.113.22 (13 ms)
- DNS ipv6 Lookup: ::ffff:140.82.113.22 (4 ms)
- Proxy URL: None (8 ms)
- Electron fetch (configured): HTTP 200 (178 ms)
- Node.js https: timed out after 10 seconds
- Node.js fetch: timed out after 10 seconds
- Helix fetch: timed out after 10 seconds

## Documentation

In corporate networks: [Troubleshooting firewall settings for GitHub Copilot](https://docs.github.com/en/copilot/troubleshooting-github-copilot/troubleshooting-firewall-settings-for-github-copilot).