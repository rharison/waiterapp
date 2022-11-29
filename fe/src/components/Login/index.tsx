import { useContext, useState } from 'react';
import { Container, Content } from './styles';
import { AuthContext } from '../../context';
import { Loading } from '../Loading';
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


export function Login(){
  const { login, isAuthenticated, isLoading } = useContext(AuthContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  async function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    const payload = {
      email,
      password
    };

    const response = await login(payload);

    if(isAuthenticated || response){
      return navigate('/orders');
    }
    toast('Usuário ou senha inválidos');
  }

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.currentTarget;

    if(name === 'email'){
      setEmail(value);
    }
    if(name === 'password'){
      setPassword(value);
    }
  }

  if(isLoading){
    return <Loading />;
  }

  if(isAuthenticated){
    return  <Navigate to={'/orders'} />;
  }

  return (
    <Container>
      <Content>
        <header>
          <strong>Login</strong>
        </header>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name='email'
            placeholder="E-mail"
            value={email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name='password'
            placeholder="Senha"
            value={password}
            onChange={handleChange}
            required
          />
          <button
            type="submit"
          >
            Entrar
          </button>
        </form>
      </Content>
    </Container>
  );
}
