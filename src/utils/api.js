/**
 * API Gateway Utility
 * Handles all API requests to external services through the gateway
 */

const API_GATEWAY_URL = process.env.REACT_APP_API_GATEWAY_URL || 'http://localhost:3001/api';

/**
 * Make a GET request through the gateway
 * @param {string} endpoint - API endpoint (e.g., '/users', '/projects')
 * @param {object} options - Additional fetch options
 * @returns {Promise} Response data
 */
export const apiGet = async (endpoint, options = {}) => {
  try {
    const url = `${API_GATEWAY_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API GET Error:', error);
    throw error;
  }
};

/**
 * Make a POST request through the gateway
 * @param {string} endpoint - API endpoint
 * @param {object} data - Data to send
 * @param {object} options - Additional fetch options
 * @returns {Promise} Response data
 */
export const apiPost = async (endpoint, data, options = {}) => {
  try {
    const url = `${API_GATEWAY_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API POST Error:', error);
    throw error;
  }
};

/**
 * Make a PUT request through the gateway
 * @param {string} endpoint - API endpoint
 * @param {object} data - Data to send
 * @param {object} options - Additional fetch options
 * @returns {Promise} Response data
 */
export const apiPut = async (endpoint, data, options = {}) => {
  try {
    const url = `${API_GATEWAY_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      body: JSON.stringify(data),
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API PUT Error:', error);
    throw error;
  }
};

/**
 * Make a DELETE request through the gateway
 * @param {string} endpoint - API endpoint
 * @param {object} options - Additional fetch options
 * @returns {Promise} Response data
 */
export const apiDelete = async (endpoint, options = {}) => {
  try {
    const url = `${API_GATEWAY_URL}${endpoint}`;
    const response = await fetch(url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status} ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('API DELETE Error:', error);
    throw error;
  }
};

/**
 * Make a request with authentication token
 * @param {string} method - HTTP method (GET, POST, PUT, DELETE)
 * @param {string} endpoint - API endpoint
 * @param {object} data - Data to send (for POST/PUT)
 * @param {string} token - Authentication token
 * @returns {Promise} Response data
 */
export const apiRequestWithAuth = async (method, endpoint, data = null, token = null) => {
  const authToken = token || localStorage.getItem('authToken');
  
  const options = {
    headers: {
      ...(authToken && { Authorization: `Bearer ${authToken}` }),
    },
  };

  switch (method.toUpperCase()) {
    case 'GET':
      return apiGet(endpoint, options);
    case 'POST':
      return apiPost(endpoint, data, options);
    case 'PUT':
      return apiPut(endpoint, data, options);
    case 'DELETE':
      return apiDelete(endpoint, options);
    default:
      throw new Error(`Unsupported HTTP method: ${method}`);
  }
};

export default {
  get: apiGet,
  post: apiPost,
  put: apiPut,
  delete: apiDelete,
  requestWithAuth: apiRequestWithAuth,
};
