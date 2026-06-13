import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import CreateHouseholdPage from './pages/CreateHouseholdPage';
import StocksPage from './pages/StocksPage';
import AddStockPage from './pages/AddStockPage';
import './App.css';

function App() {
  return (
    <Router>
      <header className="app-header">
        <div className="brand">
          <span className="brand-logo">⚡</span>
          <span className="brand-name">SplitStock</span>
        </div>
        <nav className="nav-links">
          <NavLink to="/stocks" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Stocks
          </NavLink>
          <NavLink to="/add-stock" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Add Stock
          </NavLink>
          <NavLink to="/create-household" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Household
          </NavLink>
          <NavLink to="/login" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Login
          </NavLink>
          <NavLink to="/register" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
            Register
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Routes>
          <Route path="/" element={<Navigate to="/stocks" replace />} />
          <Route path="/stocks" element={<StocksPage />} />
          <Route path="/add-stock" element={<AddStockPage />} />
          <Route path="/create-household" element={<CreateHouseholdPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="*" element={<div className="not-found"><h1>Page Not Found</h1></div>} />
        </Routes>
      </main>

      <footer className="app-footer">
        <p>© 2026 SplitStock. All rights reserved.</p>
      </footer>
    </Router>
  );
}

export default App;
