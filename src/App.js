import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import BalanceSheet from './component/BalanceSheet';
import Ledger from './component/Ledger';
import ToDoList from './component/Todolist';
import Home from './component/HomePage';
import GlobalStyle from './style/GlobalStyle';
import { ThemeProvider, useTheme } from './contexts/ThemeContext';
import styled from 'styled-components';

const AppContent = () => {
  const { isDarkMode } = useTheme(); // You can still use this to apply global styles

  return (
    <>
      <GlobalStyle isDarkMode={isDarkMode} />
      <Navbar />
      <MainContainer>
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
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

export default App;
