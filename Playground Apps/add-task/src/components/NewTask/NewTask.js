import { useState } from 'react';
import Section from '../UI/Section';
import TaskForm from './TaskForm';

const NewTask = ({ onAddTask }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const submitHandler = async (taskText) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        'https://angular-b8cd9.firebaseio.com/tasks.json',
        {
          method: 'POST',
          body: JSON.stringify({ text: taskText }),
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Something went wrong with sending data!');
      }

      const data = await response.json();

      const newItem = {
        id: data.name,
        text: taskText,
      };

      onAddTask(newItem);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  };

  return (
    <Section>
      <TaskForm onSubmitForm={submitHandler} isLoading={isLoading} />
      {error && <h2>{error}</h2>}
    </Section>
  );
};

export default NewTask;
