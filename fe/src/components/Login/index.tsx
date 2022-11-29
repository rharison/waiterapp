import { useState } from 'react';
import { Container, Content } from './styles';
import { useAuth } from '../../context';

export function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useAuth();

  function handleSubmit(event: React.FormEvent){
    event.preventDefault();
    const payload = {
      email,
      password
    };

    login(payload);
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
