import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalStyles } from './styles/GlobalStyles';
import { Header } from './components/Header';
import { Login } from './components/Login';
import { Orders } from './components/Orders';
import { Route, Routes } from 'react-router-dom';
import { PrivateRoute } from './components/PrivateRoute';

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
