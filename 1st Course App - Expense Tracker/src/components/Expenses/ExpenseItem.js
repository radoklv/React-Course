import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = ({ item }) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate item={item.date} />
        <div className="expense-item__description">
          <h2>{item.title}</h2>
          <div className="expense-item__price">${item.amount}</div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
