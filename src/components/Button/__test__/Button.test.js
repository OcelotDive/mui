import React from 'react';
import { render, screen, fireEvent, cleanup, waitFor, waitForDomChange, findBy } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Button, { increase } from '../Button';

afterEach(cleanup);

test('renders button container without crashing app', () => {
  render(<Button val={'click this button'} />);
  const button = screen.getByText(/0/i);
  expect(button).toBeInTheDocument();
});

test('displays the count state variable', () => {
  const { getByTestId } = render(<Button />);
  expect(getByTestId("count")).toHaveTextContent("0");
});
// will pass if sync fail if async
/* test('increments count', () => {
    const { getByTestId, getByText } = render(<Button val={'click this button'}/>);
    fireEvent.click(getByText(/click this button/i));
    expect(getByTestId("count")).toHaveTextContent("click this button 1");
})
*/

// should pass if async
it('increments count delayed', async () => {
  const { getByText } = render(<Button val={'click this button'} />);
  fireEvent.click(getByText(/0/i));
  const countButton = await waitFor(() => getByText(/1/i));
  expect(countButton).toHaveTextContent("1");
})

it('should change className on click', async () => {
  const { getByText } = render(<Button />);

  let btn = getByText(/0/i);
  fireEvent.click(btn);
  // take off async and await for synch click
  await waitFor(() => expect(btn).toHaveClass('foo'));
  expect(btn.className).toBe('foo');
})


it('should call increase on click', async () => {
  const mockOnClick = jest.fn();
  const { getByText } = render(<Button val={'click this button'} onClick={mockOnClick} />)
  let btn = getByText(/0/i);
  fireEvent.click(btn);
  await waitFor(() => mockOnClick())
  expect(mockOnClick).toBeCalledTimes(0);
})