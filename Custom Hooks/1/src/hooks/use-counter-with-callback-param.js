import {useEffect, useState} from 'react';

const useCounter = (callback) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((laststate) => callback(laststate));
    }, 1000);

    return () => clearInterval(interval);
  }, [callback]);

  return counter;
};

export default useCounter;
