import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
    render(<App />);
    const button = screen.getByLabelText('search');
    expect(button).toBeInTheDocument();
});
