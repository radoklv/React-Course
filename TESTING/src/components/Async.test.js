import { render, screen } from '@testing-library/react';
import Async from './Async';

// describe('Async component', () => {
//   test('renders post if request succeeds', async () => {
//     render(<Async />);

//     /**
//      * Тък не ползваме например getAllByRole а findAllByRole
//      * поради причината че findAllByRole връща промис.
//      * той се използва за Асингронни действия
//      * 2-рият параматър е {exact: ...}
//      * 3-тият параметър е изчакващия таймаут, нампример {2000}. Дефолтна стойност е 1000ms
//      */
//     const listItemElements = await screen.findAllByRole('listitem');

//     expect(listItemElements).not.toHaveLength(0);
//   });
// });

/*---------------- Mock Еквивалент / За повече инфо 389 лекция ----------------*/

describe('Async component', () => {
  test('renders post if request succeeds', async () => {
    render(<Async />);

    /**
     * Тук симулиране Мокъп респонс
     * Овъррайдваме fetch ф-ята
     */
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [{ id: 'p1', title: 'First Post' }],
    });

    const listItemElements = await screen.findAllByRole('listitem');

    expect(listItemElements).not.toHaveLength(0);
  });
});
