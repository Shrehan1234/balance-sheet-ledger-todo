import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
`;

export const Section = styled.div`
  margin-bottom: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
`;

export const Input = styled.input`
  margin: 0.5rem;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  box-sizing: border-box;
`;

export const Button = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#4caf50' : '#007bff')};
  color: white;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#45a049' : '#0056b3')};
  }
`;

export const DeleteButton = styled(Button)`
  background-color: ${({ isDarkMode }) => (isDarkMode ? '#f44336' : '#d32f2f')};

  &:hover {
    background-color: ${({ isDarkMode }) => (isDarkMode ? '#e53935' : '#c62828')};
  }
`;

export const Total = styled.div`
  margin-top: 1rem;
  font-weight: bold;
`;
