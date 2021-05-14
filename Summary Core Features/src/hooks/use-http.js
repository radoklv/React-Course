import { useReducer, useCallback } from 'react';

const initialState = {
  data: [],
  isLoading: false,
  error: null,
};

const httpReducer = (state, actions) => {
  switch (actions.type) {
    case 'PENDING':
      return { ...state, isLoading: true };
    case 'SUCCESS':
      return { data: actions.data, isLoading: false, error: null };
    case 'ERROR':
      return { data: [], isLoading: false, error: actions.error };
    default:
      return state;
  }
};

const useHttp = () => {
  const [httpState, dispatchHttp] = useReducer(httpReducer, initialState);

  const sendRequest = useCallback(async (url, method = 'GET', body) => {
    dispatchHttp({ type: 'PENDING' });
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: { 'Content-Type': 'application/json' },
      });

      if (!response.ok) {
        throw new Error('Failed to save data!');
      }

      const data = await response.json();

      if (method === 'GET') {
        const reformedData = [];
        for (const key in data) {
          const meetup = {
            id: key,
            title: data[key].title,
            image: data[key].image,
            description: data[key].description,
          };
          reformedData.push(meetup);
        }

        dispatchHttp({ type: 'SUCCESS', data: reformedData });
      } else {
        dispatchHttp({ type: 'SUCCESS', data });
      }
    } catch (error) {
      dispatchHttp({ type: 'ERROR', error: error.message });
    }
  }, []);

  return { ...httpState, sendRequest };
};

export default useHttp;
