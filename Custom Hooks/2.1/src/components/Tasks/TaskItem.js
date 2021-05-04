import classes from './TaskItem.module.css';

const TaskItem = ({children, onDelete}) => {
  return <li className={classes.task} onClick={onDelete}>{children}</li>
};

export default TaskItem;