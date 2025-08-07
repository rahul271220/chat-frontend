// api.js

const BASE_URL = 'https://dummyjson.com'; // Change as needed

// Simulate request interceptor
function requestInterceptor(config) {
    const loginData = JSON.parse(localStorage.getItem('loginData'));
  const token = loginData.accessToken;
  return {
    ...config,
    headers: {
      ...config.headers,
      Authorization: token ? `Bearer ${token}` : undefined,
      'Content-Type': 'application/json',
    },
  };
}

// Simulate response interceptor
async function responseInterceptor(response) {
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Request failed');
  }
  return response.json();
}

export async function apiFetch(endpoint, config = {}) {
  const finalConfig = requestInterceptor(config);

  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, finalConfig);
    return await responseInterceptor(response);
  } catch (error) {
    console.error('API Error:', error.message);
    throw error;
  }
}
