export const Request = async (endpoint, options = {}) => {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_PUBLIC_BASE_URL}/api${endpoint}`;
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 30000);

  try {
    const response = await fetch(url, {
      method: 'GET',
      cache: "no-store",
      headers: {
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
      ...options
    });

    clearTimeout(timeout);
    return await response.json();
  } catch (error) {
    console.error('Fetch error:', error);
    throw error;
  }
};
