import './NewExpense.css';
import { useState } from 'react';
import ExpenseForm from './ExpenseForm';

const NewExpense = ({ onAddExpense }) => {
  const [isFormOpened, setIsFormOpened] = useState(false);

  const toggleForm = () => {
    setIsFormOpened(!isFormOpened);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      id: new Date().toISOString(),
      title: enteredExpenseData.title,
      amount: enteredExpenseData.amount,
      date: enteredExpenseData.date,
    };

    onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      {!isFormOpened && <button onClick={toggleForm}>Add New Expense</button>}

      {isFormOpened && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onClose={toggleForm}
        />
      )}
    </div>
  );
};

export default NewExpense;
