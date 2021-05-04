import { useCallback, useState } from 'react';

const useHttp = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (reqestObject, callback) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(reqestObject.url, {
        method: reqestObject.method ? reqestObject.method : 'GET',
        headers: reqestObject.headers ? reqestObject.headers : {},
        body: reqestObject.body ? JSON.stringify(reqestObject.body) : null,
      });

      if (!response.ok) {
        throw new Error('Something failed with data');
      }

      const responseData = await response.json();

      callback(responseData);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  return { sendRequest, isLoading, error };
};

export default useHttp;
