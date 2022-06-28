import { default as Register } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Register', () => {

    test('it renders', () => {
        render(
        <Router >
            <Register />
        </Router>
        )
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.textContent).toMatch(/Fun quiz game - test you knowledge/i);
    });
    test('it renders', () => {
        render(
        <Router >
           <Register /> 
        </Router>
        )
        const heading = screen.getByRole('button', { 
            name: /sign up/i 
          });
        expect(heading).toBeInTheDocument();
    });
});