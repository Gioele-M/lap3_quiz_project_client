import { default as Difficulty } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Category', () => {

    test('it renders', () => {
        render(
        <Router >
          <Difficulty />  
        </Router>
        )
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/difficulty/i);
    });
    test('it renders', () => {
        render(
        <Router >
           <Difficulty /> 
        </Router>
        )
        const heading = screen.getByRole('button', { 
            name: /go back/i 
          });
        expect(heading).toBeInTheDocument();
    });
    test('it renders', () => {
        render(
        <Router >
           <Difficulty /> 
        </Router>
        )
        const heading = screen.getByRole('button', { 
            name: /Confirm selections/i 
          });
        expect(heading).toBeInTheDocument();
    });
});