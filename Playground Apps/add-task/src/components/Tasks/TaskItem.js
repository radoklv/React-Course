import classes from './TaskItem.module.css';

const TaskItem = ({ task, deleteTaskHandler }) => {
  return (
    <li className={classes.task} onClick={deleteTaskHandler}>
      {task.text}
    </li>
  );
};

export default TaskItem;
