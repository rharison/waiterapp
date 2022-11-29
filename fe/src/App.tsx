import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Orders } from './components/Orders';
import {
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { useAuth } from './context';

interface PrivateRouteProps {
  children: JSX.Element;
  redirectTo: string;
}

const PrivateRoute = ({ children, redirectTo }: PrivateRouteProps) => {
  const token = localStorage.getItem('token');
  const { isAuthUser } = useAuth();
  const isAuth = isAuthUser(token);

  return isAuthUser(token) ? children : <Navigate to={redirectTo} />;
};

export function App() {


  return (
    <>
      <ToastContainer position="bottom-center" />
      <GlobalStyles />
      <Header />
      <Routes>
        <Route path="/login" element={ <Login/> } />
        <Route path="/orders" element={
          <PrivateRoute redirectTo="/login">
            <Orders />
          </PrivateRoute>
        }
        />
      </Routes>
    </>
  );
}
