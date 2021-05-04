import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = ({ onSaveExpenseData, onClose }) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();

    if (enteredTitle === '' && enteredAmount === '' && enteredDate === '') {
      return;
    }

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    onSaveExpenseData(expenseData);

    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            id="title"
            value={enteredTitle}
            onChange={(e) => setEnteredTitle(e.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            id="amount"
            min="0.01"
            step="0.01"
            value={enteredAmount}
            onChange={(e) => setEnteredAmount(e.target.value)}
          />
        </div>

        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            id="date"
            min="2020/12/31"
            max="2022/12/31"
            value={enteredDate}
            onChange={(e) => setEnteredDate(e.target.value)}
          />
        </div>
      </div>

      <div className="new-expense__actions">
        <button type="button" onClick={onClose}>
          Cancel
        </button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
