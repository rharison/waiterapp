import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { api } from '../utils/api';
const AuthContext = createContext({
  isAuthenticated: false,
  login: (payload: any) => {},
  isAuthUser: (token: string) => {},
});

interface AuthProviderProps {
  children: React.ReactNode;
}

interface PayloadProps {
    email: string;
    password: string;
}


export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  if(!token){
    return setIsAuthenticated(false);
  }

  api.post('/token', { token })
    .then(response => setIsAuthenticated(!!response.data))
    .catch(() => setIsAuthenticated(false));

  // call this function when you want to authenticate the user
  const login = async (payload: PayloadProps) => {
    api.post('/login', payload)
      .then(response => {
        const { token } = response.data;
        localStorage.setItem('token', token);
        setIsAuthenticated(true);
        navigate('/orders');
      })
      .catch(error => {
        if(error.code === 'ERR_NETWORK'){
          return toast.error('Erro de conexão');
        }
        toast.error(error.response.data.message);
      });
  };

  const isAuthUser = async (token: string) => {
    api.post('/token', { token })
      .then(response => {
        setIsAuthenticated(!!response.data);
        return response.status === 200;
      })
      .catch(() => {
        setIsAuthenticated(false);

      });
  };

  // call this function to sign out logged in user


  const value = useMemo(
    () => ({
      isAuthenticated,
      login,
      isAuthUser
    }),
    [isAuthenticated]
  );

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = () => {
  return useContext(AuthContext);
};
