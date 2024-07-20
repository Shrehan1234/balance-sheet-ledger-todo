import React, { useState } from 'react';
import { Container, Table, Input, Button, Section, Total, DeleteButton } from '../style/LedgerStyles';

const Ledger = () => {
  const [entries, setEntries] = useState({
    debit: [],
    credit: []
  });
  const [date, setDate] = useState('');
  const [particulars, setParticulars] = useState('');
  const [ledgerFolio, setLedgerFolio] = useState('');
  const [amount, setAmount] = useState('');
  const [isDebit, setIsDebit] = useState(true); // true for debit, false for credit

  const addEntry = () => {
    const entry = {
      date,
      particulars,
      ledgerFolio,
      amount: parseFloat(amount) || 0,
    };

    if (isDebit) {
      setEntries((prev) => ({
        ...prev,
        debit: [...prev.debit, entry]
      }));
    } else {
      setEntries((prev) => ({
        ...prev,
        credit: [...prev.credit, entry]
      }));
    }

    // Clear inputs
    setDate('');
    setParticulars('');
    setLedgerFolio('');
    setAmount('');
  };

  const deleteEntry = (index) => {
    setEntries((prev) => {
      const updatedEntries = [...prev[isDebit ? 'debit' : 'credit']];
      updatedEntries.splice(index, 1);
      return { ...prev, [isDebit ? 'debit' : 'credit']: updatedEntries };
    });
  };

  const switchSide = () => {
    setIsDebit(!isDebit);
  };

  const calculateTotal = (side) =>
    entries[side].reduce((acc, entry) => acc + entry.amount, 0);

  return (
    <Container>
      <h1>Ledger</h1>
      <Section>
        <h2>{isDebit ? 'Debit Side' : 'Credit Side'}</h2>
        <Input
          type="date"
          placeholder="Date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Particulars"
          value={particulars}
          onChange={(e) => setParticulars(e.target.value)}
        />
        <Input
          type="text"
          placeholder="Ledger Folio (LF)"
          value={ledgerFolio}
          onChange={(e) => setLedgerFolio(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={addEntry}>Add Entry</Button>
        <Button onClick={switchSide}>
          {isDebit ? 'Switch to Credit Side' : 'Switch to Debit Side'}
        </Button>
        <Table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Particulars</th>
              <th>Ledger Folio (LF)</th>
              <th>Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {entries[isDebit ? 'debit' : 'credit'].map((entry, index) => (
              <tr key={index}>
                <td>{entry.date}</td>
                <td>{entry.particulars}</td>
                <td>{entry.ledgerFolio}</td>
                <td>{entry.amount.toFixed(2)}</td>
                <td>
                  <DeleteButton onClick={() => deleteEntry(index)}>Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Total>Total {isDebit ? 'Debit' : 'Credit'}: {calculateTotal(isDebit ? 'debit' : 'credit').toFixed(2)}</Total>
      </Section>
    </Container>
  );
};

export default Ledger;
