import { useContext, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../../context';
import { Loading } from '../Loading';

interface PrivateRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

export const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
  const { isAuthenticated, isLoading } = useContext(AuthContext);

  if(isLoading){
    return <Loading />;
  }

  return isAuthenticated ? children : <Navigate to={redirectTo} />;
};
