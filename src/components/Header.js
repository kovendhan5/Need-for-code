// src/components/Header.js
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #2c3e50;
  color: #fff;
  padding: 15px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 28px;
  font-weight: bold;
`;

const Nav = styled.nav`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-left: 20px;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ecf0f1;
    }
  }
`;

const AdminNav = styled.ul`
  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  }
  li {
    margin-left: 20px;
  }
  a {
    color: #fff;
    text-decoration: none;
    &:hover {
      color: #ecf0f1;
    }
  }
`;

const Header = () => {
  const [role, setRole] = useState(localStorage.getItem('role') || '');
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('authenticated');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <HeaderContainer>
      <Logo>Need For Code</Logo>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </Nav>
      {role === 'admin' && (
        <AdminNav>
          <ul>
            <li><Link to="/upload">Upload File</Link></li>
            <li><button onClick={handleLogout}>Logout</button></li>
          </ul>
        </AdminNav>
      )}
    </HeaderContainer>
  );
};

export default Header;