import { useEffect, useState, Fragment, useCallback } from 'react';

import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [tasks, setTasks] = useState([]);

  const deleteTaskHandler = async (id) => {
    await fetch(`https://angular-b8cd9.firebaseio.com/tasks/${id}.json`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    setTasks((oldState) =>
      oldState.filter((task) => {
        return task.id !== id;
      })
    );
  };

  const fetchTasksHandler = async () => {
    console.log('fetched')
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(
        'https://angular-b8cd9.firebaseio.com/tasks.json'
      );

      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      let tasksArr = [];

      for (const key in data) {
        tasksArr.push({
          id: key,
          text: data[key].text,
        });
      }

      setTasks(tasksArr);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  const addTaskHandler = (task) => {
    setTasks((oldState) => oldState.concat(task));
  };

  useEffect(() => {
    fetchTasksHandler();
  }, []);

  return (
    <Fragment>
      <NewTask onAddTask={addTaskHandler} />
      <Tasks
        isLoading={isLoading}
        error={error}
        tasks={tasks}
        fetchTasksHandler={fetchTasksHandler}
        deleteTaskHandler={deleteTaskHandler}
      />
    </Fragment>
  );
}

export default App;
