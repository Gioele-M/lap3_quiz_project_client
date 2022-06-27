import { default as Quiz } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Quiz', () => {

    test('it renders', () => {
        render(
        <Router >
            <Quiz />
        </Router>
        )
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/quiz/i);
    });
    test('it renders', () => {
        render(
        <Router >
           <Quiz /> 
        </Router>
        )
        const heading = screen.getByRole('button', { 
            name: /Finish quiz/i 
          });
        expect(heading).toBeInTheDocument();
    });
});