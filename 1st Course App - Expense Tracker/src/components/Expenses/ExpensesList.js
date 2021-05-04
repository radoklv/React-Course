import ExpenseItem from './ExpenseItem';
import './ExpensesList.css';

const ExpensesList = ({ expenses }) => {
  if (expenses.length === 0) {
    return <p className="expenses-list__fallback">There is no expenses</p>;
  }

  return (
    <ul className="expenses-list">
      {expenses.map((item) => {
        return <ExpenseItem key={item.id} item={item} />;
      })}
    </ul>
  );
};

export default ExpensesList;
