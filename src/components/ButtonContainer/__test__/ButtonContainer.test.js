import React from 'react';
import { render, screen, fireEvent} from '@testing-library/react';
import App from '../../../App';
import ButtonContainer from '../ButtonContainer'

test('renders button container without crashing app', () => {
    render(<ButtonContainer />);
    const container = screen.getByText(/button container/i);
    expect(container).toBeInTheDocument();
  });