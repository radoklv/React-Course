import Section from '../UI/Section';
import TaskItem from './TaskItem';
import classes from './Tasks.module.css';

const Tasks = ({ isLoading, error, tasks, fetchTasksHandler, deleteTaskHandler }) => {
  let tasksList = <h2>There is no tasks</h2>;

  if (tasks.length > 0) {
    tasksList = (
      <ul>
        {tasks.map((task) => {
          return (
            <TaskItem
              key={task.id}
              task={task}
              deleteTaskHandler={deleteTaskHandler.bind(null, task.id)}
            ></TaskItem>
          );
        })}
      </ul>
    );
  }

  let content = tasksList;

  if (isLoading) {
    content = <h2>Loading...</h2>;
  }

  if (error) {
    content = <button onClick={fetchTasksHandler}>Try Again</button>;
  }

  return (
    <Section>
      <div className={classes.container}>{content}</div>
    </Section>
  );
};

export default Tasks;
