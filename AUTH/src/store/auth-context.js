import React, { useState, useEffect, useCallback } from 'react';

let logoutTimer;

const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
});

const calculatingRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime(); // Конвертираме текущото време в милисекунди
  const ajustedExpTime = new Date(expirationTime).getTime(); // Конвертираме времето след един час в минисекунди

  const remainingDuration = ajustedExpTime - currentTime;

  return remainingDuration; // Връщаме оставащото време в милисекунди
};

const retriveStoredToken = () => {
  const storedToken = localStorage.getItem('token');
  const storedExpTime = localStorage.getItem('expirationTime');

  // Връща текущото време + оставащото време записано в LocalStorage
  const remainingTime = calculatingRemainingTime(storedExpTime);

  // Ако оставащото време е по- малко от минута
  if (remainingTime <= 60000) {
    //Изчистваме LocalSotrage
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    //Врщаме null
    return null;
  }

  //Ако оставщото време е повече от минута връщаме обектa
  return { token: storedToken, duration: remainingTime };
};

export const AuthContextProvider = (props) => {
  const tokenData = retriveStoredToken();
  let initialToken;

  // Ако не e null
  if (tokenData) {
    //initialТoken става, изчисленото от retriveStoredToken, оставащо време
    initialToken = tokenData.token;
  }
  const [token, setToken] = useState(initialToken);

  const userIsLoggedIn = !!token;

  /** Тъй като използваме ф-ята в useEffect, за да избекмен проблеми
   *  използваме useCallback
   */
  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', expirationTime);

    const remainingTime = calculatingRemainingTime(expirationTime); // Оставащото времем в милисекунди

    logoutTimer = setTimeout(logoutHandler, remainingTime); // Сетваме таймер с оставащото време
  };

  useEffect(() => {
    // При всяко ръчно рефрешване ще се сетва таймер с оставащото време
    if (tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    token: token,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
