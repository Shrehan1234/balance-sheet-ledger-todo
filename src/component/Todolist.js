import React, { useState } from 'react';
import styled from 'styled-components';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    setTasks([...tasks, { task, completed: false }]);
    setTask('');
  };

  const toggleTaskCompletion = (index) => {
    const newTasks = tasks.map((t, i) => (
      i === index ? { ...t, completed: !t.completed } : t
    ));
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <Container>
      <h1>To-Do List</h1>
      <Form>
        <input
          type="text"
          placeholder="New Task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button onClick={addTask}>Add Task</button>
      </Form>
      <TaskList>
        {tasks.map((t, index) => (
          <Task key={index} completed={t.completed}>
            <span onClick={() => toggleTaskCompletion(index)}>
              {t.task}
            </span>
            <button onClick={() => deleteTask(index)}>Delete</button>
          </Task>
        ))}
      </TaskList>
    </Container>
  );
};

const Container = styled.div`
  padding: 2rem;
`;

const Form = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  input {
    padding: 0.5rem;
    font-size: 1rem;
  }

  button {
    padding: 0.5rem 1rem;
    font-size: 1rem;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;
  }

  button:hover {
    background-color: #0056b3;
  }
`;

const TaskList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Task = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  margin-bottom: 0.5rem;
  background-color: ${props => props.completed ? '#d4edda' : '#f8d7da'};
  border: 1px solid ${props => props.completed ? '#c3e6cb' : '#f5c6cb'};

  span {
    cursor: pointer;
    text-decoration: ${props => props.completed ? 'line-through' : 'none'};
  }

  button {
    background: none;
    border: none;
    color: #dc3545;
    cursor: pointer;
  }

  button:hover {
    text-decoration: underline;
  }
`;

export default ToDoList;
