import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './Components/LoginPage/LoginPage';
import QuotesPage from './Components/QuotesPage/QuotesPage';
import AddQuotePage from './Components/AddQuote/AddQuote';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token') || '');

  const setTokenAndStore = (token) => {
    setToken(token);
    localStorage.setItem('token', token);
  };

  const logout = () => {
    setToken('');
    localStorage.removeItem('token');
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage setToken={setTokenAndStore} />} />
        <Route path="/quotes" element={token ? <QuotesPage token={token} logout={logout} /> : <Navigate to="/login" />} />
        <Route path="/add-quote" element={token ? <AddQuotePage token={token} /> : <Navigate to="/login" />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App;
