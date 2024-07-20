import React, { useState } from 'react';
import styled from 'styled-components';

const Ledger = () => {
  const [entries, setEntries] = useState([]);
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');

  const addEntry = () => {
    setEntries([...entries, { description, amount: parseFloat(amount) }]);
    setDescription('');
    setAmount('');
  };

  const calculateTotal = () => {
    return entries.reduce((total, entry) => total + entry.amount, 0);
  };

  return (
    <Container>
      <h1>Ledger</h1>
      <Form>
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={addEntry}>Add Entry</button>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>Description</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry, index) => (
            <tr key={index}>
              <td>{entry.description}</td>
              <td>{entry.amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Total>Total: {calculateTotal().toFixed(2)}</Total>
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

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;

  th, td {
    padding: 0.5rem;
    border: 1px solid #ddd;
  }

  th {
    background-color: #f4f4f4;
  }
`;

const Total = styled.div`
  font-weight: bold;
  font-size: 1.2rem;
`;

export default Ledger;

