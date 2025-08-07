// useApi.js

import { useState, useEffect, useCallback } from 'react';
import { apiFetch } from './interceptor';

export default function useApi(endpoint, options = {}, autoTrigger = true) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(() => {
    setLoading(true);
    setError(null);

    apiFetch(endpoint, options)
      .then(setData)
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, [endpoint, options]);

  useEffect(() => {
    if (autoTrigger) {
      fetchData();
    }
  }, [fetchData, autoTrigger]);

  return { data, error, loading, fetchData };
}
