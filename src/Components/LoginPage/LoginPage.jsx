import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import FormContainer from '../MiniComponents/FormContainer';
import InputField from '../MiniComponents/InputField';
import Button from '../MiniComponents/Button';

const LoginPage = ({ setToken }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/sessions', { username, password });
      setToken(response.data.accessToken);
      navigate('/quotes');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Wrong Password or Username');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh',width: '100vw' }}>
    <FormContainer>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <InputField type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
        <label>Password:</label>
        <InputField type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button type="submit">Login</Button>
      </form>
    </FormContainer>
    </div>
  );
};

export default LoginPage;
