import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  background-color: ${({ theme }) => theme.isDarkMode ? '#1e1e1e' : '#ffffff'};
  color: ${({ theme }) => theme.isDarkMode ? '#ffffff' : '#000000'};
  transition: background-color 0.3s, color 0.3s;
  max-width: 800px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 1rem;
  }

  h1 {
    text-align: center;
    font-size: 2rem;
  }
`;

export const TaskInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  margin-right: 1rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

export const TaskPrioritySelect = styled.select`
  margin-right: 1rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    margin-right: 0.5rem;
  }
`;

export const AddButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  padding: 0.5rem;
  background-color: #dc3545;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 0.5rem;

  &:hover {
    background-color: #c82333;
  }
`;

export const TaskList = styled.ul`
  list-style: none;
  padding: 0;
  margin-top: 1rem;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${({ theme }) => theme.isDarkMode ? '#333333' : '#f9f9f9'};
  border: 1px solid #ccc;
  border-radius: 5px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 0;
`;

export const FilterButton = styled.button`
  padding: 0.5rem 1rem;
  margin: 0 0.5rem;
  background-color: ${({ isActive, theme }) => isActive ? (theme.isDarkMode ? '#007bff' : '#0056b3') : '#6c757d'};
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: ${({ isActive, theme }) => isActive ? (theme.isDarkMode ? '#0056b3' : '#003b73') : '#5a6268'};
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
    margin: 0 0.25rem;
  }
`;
