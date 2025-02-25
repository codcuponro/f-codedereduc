export const Request = async (endpoint, options = {}) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api${endpoint}`;
  const defaultOptions = {
    method: 'GET',
    cache: "no-store",
    headers: {
      'Content-Type': 'application/json',
    },
    signal: AbortSignal.timeout(60 * 1000),
    ...options
  };

  try {
    const response = await fetch(url, defaultOptions);    
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};