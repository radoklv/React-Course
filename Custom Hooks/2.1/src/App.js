import React, { useEffect, useState } from 'react';
import useHttp from './hooks/use-http';
import Tasks from './components/Tasks/Tasks';
import NewTask from './components/NewTask/NewTask';

function App() {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const deleteTaskHandler = (id) => {
    sendRequest(
      {
        url: `https://angular-b8cd9.firebaseio.com/tasks/${id}.json`,
        method: 'DELETE',
      },
      () => {
        setTasks(
          tasks.filter((task) => {
            return task.id !== id;
          })
        );
      }
    );
  };

  useEffect(() => {
    function transformFetchTaskData(data) {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }

      setTasks(loadedTasks);
    }

    sendRequest(
      {
        url: 'https://angular-b8cd9.firebaseio.com/tasks.json',
      },

      transformFetchTaskData
    );
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={sendRequest}
        onDelete={deleteTaskHandler}
      />
    </React.Fragment>
  );
}

export default App;
