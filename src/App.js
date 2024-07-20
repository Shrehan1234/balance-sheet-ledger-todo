import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar';
import BalanceSheet from './component/BalanceSheet';
import Ledger from './component/Ledger';
import ToDoList from './component/Todolist';
import styled from 'styled-components';

const App = () => {
  return (
    <Router>
      <Navbar />
      <MainContainer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/balance-sheet" element={<BalanceSheet />} />
          <Route path="/ledger" element={<Ledger />} />
          <Route path="/todo" element={<ToDoList />} />
        </Routes>
      </MainContainer>
    </Router>
  );
};

const MainContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
`;

const Home = () => (
  <HomeContainer>
    <h1>Welcome to the Financial App</h1>
  </HomeContainer>
);

const HomeContainer = styled.div`
  text-align: center;
`;

export default App;
