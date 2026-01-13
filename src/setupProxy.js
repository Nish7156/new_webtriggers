/**
 * Development Proxy Configuration
 * This file is automatically loaded by Create React App
 * It sets up a proxy for API requests during development
 */

const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  // Proxy API requests to your gateway/backend service
  // Update the target URL to match your other project's API gateway
  const apiGatewayUrl = process.env.REACT_APP_API_GATEWAY_URL || 'http://localhost:3001';
  
  app.use(
    '/api',
    createProxyMiddleware({
      target: apiGatewayUrl,
      changeOrigin: true,
      secure: false, // Set to true if using HTTPS
      logLevel: 'debug',
      pathRewrite: {
        '^/api': '/api', // Keep /api prefix, adjust if needed
      },
      onProxyReq: (proxyReq, req, res) => {
        // Add any custom headers here
        // proxyReq.setHeader('X-Custom-Header', 'value');
        console.log(`Proxying ${req.method} ${req.url} to ${apiGatewayUrl}${req.url}`);
      },
      onError: (err, req, res) => {
        console.error('Proxy Error:', err);
        res.status(500).json({ error: 'Proxy error occurred' });
      },
    })
  );

  // You can add more proxy configurations for different services
  // Example: Proxy for a different microservice
  // app.use(
  //   '/service2',
  //   createProxyMiddleware({
  //     target: 'http://localhost:3002',
  //     changeOrigin: true,
  //   })
  // );
};
