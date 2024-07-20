import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import BalanceSheet from './component/BalanceSheet';
import Ledger from './component/Ledger';
import ToDoList from './component/Todolist';
import Home from './component/HomePage';  // Import the  Home component
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';

const AppContent = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar />
      <MainContainer>
        <ThemeToggleButton onClick={toggleTheme}>
          {isDarkMode ? 'Light Mode' : 'Dark Mode'}
        </ThemeToggleButton>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balance-sheet" element={<BalanceSheet />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </MainContainer>
    </>
  );
};

const App = () => (
  <ThemeProvider>
    <Router>
      <AppContent />
    </Router>
  </ThemeProvider>
);

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const ThemeToggleButton = styled.button`
  position: fixed;
  top: 0.5rem;
  right: 1rem;
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  cursor: pointer;
  
  &:hover {
    background-color: #0056b3;
  }
`;

export default App;
