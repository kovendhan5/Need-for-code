// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
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

const SearchBar = styled.div`
  display: flex;
  align-items: center;
`;

const SearchInput = styled.input`
  padding: 8px 15px;
  border: none;
  border-radius: 20px;
  width: 250px;
  font-size: 16px;
  margin-right: 10px;
`;

const SearchButton = styled.button`
  background-color: #e74c3c;
  color: #fff;
  border: none;
  padding: 8px 15px;
  border-radius: 20px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #c0392b;
  }
`;

function Header() {
  return (
    <HeaderContainer>
      <Logo>Need For Code</Logo>
      <Nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/login">Login</Link></li>
        </ul>
      </Nav>
      <SearchBar>
        <SearchInput type="text" placeholder="Search" />
        <SearchButton>Search</SearchButton>
      </SearchBar>
    </HeaderContainer>
  );
}

export default Header;