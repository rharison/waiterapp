import React, { useState, useEffect } from 'react';
import { api } from '../utils/api';

export const AuthContext = React.createContext({} as AuthContextProps);

interface AuthContextProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (payload: PayloadProps) => Promise<boolean>;
}
interface PayloadProps {
  email: string;
  password: string;
}

interface AuthProps {
  children: JSX.Element;
}

async function checkIsAuthenticated() {
  const token = localStorage.getItem('token');
  if(!token){
    return false;
  }
  const response = await api.post('/token', { token });
  return response.status === 200;
}

async function authLogin(payload: PayloadProps) {
  const response = await api.post('/login', payload);
  if(response.status === 200){
    localStorage.setItem('token', response.data.token);
  }
  return response.status === 200;
}

export default function Auth({ children }: AuthProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  console.log('AuthContext', isAuthenticated);
  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = () => checkIsAuthenticated()
    .then((response) => setIsAuthenticated(response))
    .catch(() => setIsAuthenticated(false))
    .finally(() => setIsLoading(false));

  const login = (payload: PayloadProps) => authLogin(payload)
    .then((response) => {
      setIsAuthenticated(response);
      return response;
    })
    .catch(() => {
      setIsAuthenticated(false);
      return false;
    })
    .finally(() => setIsLoading(false));

  return (
    <AuthContext.Provider value={{ isAuthenticated, isLoading, login }}>
      {children}
    </AuthContext.Provider>
  );
}

