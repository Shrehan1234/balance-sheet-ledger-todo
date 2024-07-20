import React, { useState } from 'react';
import {
  Container,
  Section,
  Table,
  Input,
  Button,
  Total,
  DeleteButton
} from '../style/BalanceSheetStyles';

const BalanceSheet = () => {
  const [liabilities, setLiabilities] = useState([]);
  const [assets, setAssets] = useState([]);
  const [liabilityDescription, setLiabilityDescription] = useState('');
  const [liabilityAmount, setLiabilityAmount] = useState('');
  const [liabilityNegativeAmount, setLiabilityNegativeAmount] = useState('');
  const [assetDescription, setAssetDescription] = useState('');
  const [assetAmount, setAssetAmount] = useState('');
  const [assetNegativeAmount, setAssetNegativeAmount] = useState('');

  const addLiability = () => {
    const entry = {
      description: liabilityDescription,
      amount: parseFloat(liabilityAmount),
      negativeAmount: parseFloat(liabilityNegativeAmount) || 0,
    };
    setLiabilities([...liabilities, entry]);

    // Clear liability inputs
    setLiabilityDescription('');
    setLiabilityAmount('');
    setLiabilityNegativeAmount('');
  };

  const addAsset = () => {
    const entry = {
      description: assetDescription,
      amount: parseFloat(assetAmount),
      negativeAmount: parseFloat(assetNegativeAmount) || 0,
    };
    setAssets([...assets, entry]);

    // Clear asset inputs
    setAssetDescription('');
    setAssetAmount('');
    setAssetNegativeAmount('');
  };

  const deleteLiability = (index) => {
    const newLiabilities = liabilities.filter((_, i) => i !== index);
    setLiabilities(newLiabilities);
  };

  const deleteAsset = (index) => {
    const newAssets = assets.filter((_, i) => i !== index);
    setAssets(newAssets);
  };

  const calculateTotal = (entries) =>
    entries.reduce((acc, entry) => acc + entry.amount - entry.negativeAmount, 0);

  return (
    <Container>
      <h1>Balance Sheet</h1>

      <Section>
        <h2>Liabilities</h2>
        <Input
          type="text"
          placeholder="Description"
          value={liabilityDescription}
          onChange={(e) => setLiabilityDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={liabilityAmount}
          onChange={(e) => setLiabilityAmount(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Negative Amount"
          value={liabilityNegativeAmount}
          onChange={(e) => setLiabilityNegativeAmount(e.target.value)}
        />
        <Button onClick={addLiability}>Add Liability</Button>
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Negative Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {liabilities.map((entry, index) => (
              <tr key={index}>
                <td>{entry.description}</td>
                <td>{entry.amount.toFixed(2)}</td>
                <td>{entry.negativeAmount.toFixed(2)}</td>
                <td>
                  <DeleteButton onClick={() => deleteLiability(index)}>Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Total>Total Liabilities: {calculateTotal(liabilities).toFixed(2)}</Total>
      </Section>

      <Section>
        <h2>Assets</h2>
        <Input
          type="text"
          placeholder="Description"
          value={assetDescription}
          onChange={(e) => setAssetDescription(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Amount"
          value={assetAmount}
          onChange={(e) => setAssetAmount(e.target.value)}
        />
        <Input
          type="number"
          placeholder="Negative Amount"
          value={assetNegativeAmount}
          onChange={(e) => setAssetNegativeAmount(e.target.value)}
        />
        <Button onClick={addAsset}>Add Asset</Button>
        <Table>
          <thead>
            <tr>
              <th>Description</th>
              <th>Amount</th>
              <th>Negative Amount</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {assets.map((entry, index) => (
              <tr key={index}>
                <td>{entry.description}</td>
                <td>{entry.amount.toFixed(2)}</td>
                <td>{entry.negativeAmount.toFixed(2)}</td>
                <td>
                  <DeleteButton onClick={() => deleteAsset(index)}>Delete</DeleteButton>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <Total>Total Assets: {calculateTotal(assets).toFixed(2)}</Total>
      </Section>
    </Container>
  );
};

export default BalanceSheet;
