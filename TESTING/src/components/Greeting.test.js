import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting component', () => {
  test('renders Hello World', () => {
    render(<Greeting />);

    /**
     *  Regular expression което търси текст
     * който е Insensitive за гелеми/ малки букви
     */
    //screen.getByText(/hello world/i);
    //Еквивалентен запис:
    const helloWorldElement = screen.getByText('hello world', { exact: false }); //Втория параметър е optional

    expect(helloWorldElement).toBeInTheDocument();
  });

  test('Render: "I\'s good to see you!" if the button was NOT clicked', () => {
    render(<Greeting />);

    const outputElement = screen.getByText('good to see you', { exact: false });

    expect(outputElement).toBeInTheDocument();
  });

  test('Render "Changed!" if the button was clicked', () => {
    render(<Greeting />);

    //const buttonElement = screen.getByRole('button')
    //или
    const buttonElement = screen.getByText('Change Text');
    userEvent.click(buttonElement);

    const outputElement = screen.getByText('Changed!');

    expect(outputElement).toBeInTheDocument();
  });

  test('Remove "Its good to see you!" if the button was clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.click(buttonElement);

    /**
     * Тук ползваме queryByText вземсто getByText, защото getByText ще върне Error
     * при НЕнамиране на елемента. По този начин теста никога няма да премине.
     * queryByText няма да върне грешка при НЕнамиране на елемента, а ще върне NULL
     */
    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });

    expect(outputElement).not.toBeInTheDocument();
    //или
    //expect(outputElement).toBeNull();
  });

  test('"Its good to see you!" not to be rendered, if the button was DOUBLE Clicked', () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole('button');
    userEvent.dblClick(buttonElement);

    const outputElement = screen.queryByText('good to see you', {
      exact: false,
    });

    expect(outputElement).toBeNull();
  });
});
