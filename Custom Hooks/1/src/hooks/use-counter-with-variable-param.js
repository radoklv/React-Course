import {useEffect, useState} from 'react';

const useCounter = (mode = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(mode){
        setCounter((laststate) => laststate + 1);
      }else{
        setCounter((laststate) => laststate - 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [mode]);

  return counter;
};

export default useCounter;
