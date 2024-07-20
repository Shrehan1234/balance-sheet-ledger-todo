import React, { useState } from 'react';
import { Container, TaskInput, AddButton, DeleteButton, TaskList, TaskItem, TaskPrioritySelect, FilterButton, FilterContainer } from '../style/ToDoListStyles';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState('');
  const [priority, setPriority] = useState('Low');
  const [filter, setFilter] = useState('All'); // All, Completed, Not Completed

  const addTask = () => {
    if (taskText.trim() === '') return;
    
    setTasks([
      ...tasks,
      { text: taskText, priority, completed: false }
    ]);

    setTaskText('');
    setPriority('Low');
  };

  const toggleCompletion = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'All') return true;
    if (filter === 'Completed') return task.completed;
    if (filter === 'Not Completed') return !task.completed;
    return true;
  });

  return (
    <Container>
      <h1>To-Do List</h1>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <TaskInput
          type="text"
          placeholder="Enter task"
          value={taskText}
          onChange={(e) => setTaskText(e.target.value)}
        />
        <TaskPrioritySelect
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </TaskPrioritySelect>
        <AddButton onClick={addTask}>Add Task</AddButton>
      </div>
      <FilterContainer>
        <FilterButton onClick={() => setFilter('All')}>All</FilterButton>
        <FilterButton onClick={() => setFilter('Completed')}>Completed</FilterButton>
        <FilterButton onClick={() => setFilter('Not Completed')}>Not Completed</FilterButton>
      </FilterContainer>
      <TaskList>
        {filteredTasks.map((task, index) => (
          <TaskItem key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleCompletion(index)}
              style={{ marginRight: '0.5rem' }}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none', flex: 1 }}>
              {task.text} ({task.priority})
            </span>
            <DeleteButton onClick={() => deleteTask(index)}>Delete</DeleteButton>
          </TaskItem>
        ))}
      </TaskList>
    </Container>
  );
};

export default ToDoList;
