import styled from 'styled-components';

// Define a dark theme and light theme
// eslint-disable-next-line
const darkTheme = {
  background: '#333',
  text: '#f4f4f4',
  border: '#555',
  buttonBackground: '#4caf50',
  buttonText: '#fff',
  deleteButtonBackground: '#f44336',
  deleteButtonText: '#fff',
  hoverBackground: '#45a049',
  deleteHoverBackground: '#e53935'
};
// eslint-disable-next-line
const lightTheme = {
  background: '#f4f4f4',
  text: '#333',
  border: '#ddd',
  buttonBackground: '#4caf50',
  buttonText: '#fff',
  deleteButtonBackground: '#f44336',
  deleteButtonText: '#fff',
  hoverBackground: '#45a049',
  deleteHoverBackground: '#e53935'
};

export const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const TaskInput = styled.input`
  padding: 0.75rem;
  width: calc(100% - 160px);
  margin-right: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const TaskPrioritySelect = styled.select`
  padding: 0.75rem;
  margin-right: 1rem;
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.background};
  color: ${({ theme }) => theme.text};
`;

export const Button = styled.button`
  padding: 0.75rem 1.25rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme, variant }) => (variant === 'delete' ? theme.deleteButtonBackground : theme.buttonBackground)};
  color: ${({ theme }) => theme.buttonText};

  &:hover {
    background-color: ${({ theme, variant }) => (variant === 'delete' ? theme.deleteHoverBackground : theme.hoverBackground)};
    transform: scale(1.05);
  }

  &:active {
    background-color: ${({ theme }) => theme.buttonBackground};
    color: ${({ theme }) => theme.buttonText};
  }
`;

export const AddButton = styled(Button)`
  margin-right: 1rem;
`;

export const DeleteButton = styled(Button).attrs({ variant: 'delete' })``;

export const TaskList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
`;

export const TaskItem = styled.li`
  display: flex;
  align-items: center;
  margin: 0.5rem 0;
  padding: 0.75rem;
  background-color: ${({ theme }) => theme.background};
  border: 1px solid ${({ theme }) => theme.border};
  border-radius: 4px;
`;

export const FilterContainer = styled.div`
  margin: 1rem 0;
`;

export const FilterButton = styled(Button)`
  background-color: #2196f3;
  margin-right: 0.5rem;

  &:hover {
    background-color: #1976d2;
  }
`;
