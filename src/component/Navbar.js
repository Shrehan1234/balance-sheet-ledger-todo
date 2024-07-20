// src/component/Navbar.js
import React from 'react';
import styled from 'styled-components';
import { useTheme } from '../contexts/ThemeContext'; // Correct import

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Using useTheme

  return (
    <Nav>
      <Logo>Financial App</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/balance-sheet">Balance Sheet</NavLink>
        <NavLink href="/ledger">Ledger</NavLink>
        <NavLink href="/todo">To-Do List</NavLink>
      </NavLinks>
      <DarkModeButton onClick={toggleTheme}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </DarkModeButton>
    </Nav>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.navBackground};
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1rem;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.navText};
  font-size: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const DarkModeButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.navText};
  font-size: 1rem;
  cursor: pointer;
  outline: none;

  &:hover {
    text-decoration: underline;
  }
`;

export default Navbar;
