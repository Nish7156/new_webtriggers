# API Gateway Configuration

This document explains how to configure and use the API gateway for connecting to your other project.

## Overview

The gateway setup allows this React application to communicate with your other project's backend services through a proxy configuration.

## Configuration Files

### 1. `src/setupProxy.js`
This file configures the development proxy. It automatically proxies requests from `/api/*` to your gateway URL.

### 2. `src/utils/api.js`
This utility file provides helper functions for making API requests through the gateway.

## Environment Variables

Create a `.env` file in the root directory with the following:

```env
REACT_APP_API_GATEWAY_URL=http://localhost:3001
```

For production, update this to your production gateway URL:
```env
REACT_APP_API_GATEWAY_URL=https://your-gateway-domain.com
```

## Usage

### Basic API Calls

```javascript
import api from './utils/api';

// GET request
const data = await api.get('/users');

// POST request
const result = await api.post('/users', { name: 'John', email: 'john@example.com' });

// PUT request
const updated = await api.put('/users/1', { name: 'Jane' });

// DELETE request
await api.delete('/users/1');
```

### Authenticated Requests

```javascript
import { apiRequestWithAuth } from './utils/api';

// The token will be automatically retrieved from localStorage
const data = await apiRequestWithAuth('GET', '/protected-endpoint');

// Or pass a token directly
const data = await apiRequestWithAuth('GET', '/protected-endpoint', null, 'your-token');
```

## Development Setup

1. Make sure your other project's API gateway is running (default: `http://localhost:3001`)
2. Create a `.env` file with `REACT_APP_API_GATEWAY_URL` pointing to your gateway
3. Start the React app: `npm start`
4. All requests to `/api/*` will be automatically proxied to your gateway

## Production Setup

For production, you have two options:

### Option 1: Same Domain (Recommended)
If your gateway is on the same domain, update `REACT_APP_API_GATEWAY_URL` to use relative paths or the same domain.

### Option 2: CORS Configuration
If your gateway is on a different domain, ensure CORS is properly configured on your gateway server to allow requests from your React app's domain.

## Customizing the Gateway

To modify the proxy configuration, edit `src/setupProxy.js`. You can:
- Add multiple proxy endpoints
- Modify headers
- Add authentication
- Configure SSL/TLS settings

## Example: Adding a New Service

```javascript
// In setupProxy.js
app.use(
  '/service2',
  createProxyMiddleware({
    target: 'http://localhost:3002',
    changeOrigin: true,
  })
);
```

Then use it:
```javascript
const data = await api.get('/service2/endpoint');
```

## Troubleshooting

1. **Proxy not working**: Make sure `http-proxy-middleware` is installed (it comes with react-scripts)
2. **CORS errors**: Check your gateway's CORS configuration
3. **404 errors**: Verify the gateway URL is correct in your `.env` file
4. **Connection refused**: Ensure your gateway service is running
