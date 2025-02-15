// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const LoginContainer = styled.div`
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const Input = styled.input`
  padding: 10px;
  font-size: 1em;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: #28a745;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #218838;
  }
`;

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Authenticate with backend
    axios.post('https://your-gs-webapp-url/api/authenticate', { username, password })
      .then(response => {
        if (response.data.authenticated) {
          // Store user role and token if necessary
          localStorage.setItem('authenticated', 'true');
          localStorage.setItem('role', response.data.role);
          navigate('/');
        } else {
          setError('Invalid username or password.');
        }
      })
      .catch(error => {
        console.error('Authentication error:', error);
        setError('Authentication failed.');
      });
  };

  return (
    <LoginContainer>
      <h2>Login</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <LoginForm onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <SubmitButton type="submit">Login</SubmitButton>
      </LoginForm>
    </LoginContainer>
  );
};

export default Login;