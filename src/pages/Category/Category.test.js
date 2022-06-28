import { default as Category } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Category', () => {

    test('it renders', () => {
        render(
        <Router>
          <Category />  
        </Router>
        )
        const heading = screen.getByRole('heading');
        expect(heading.textContent).toMatch(/category/i);
    });
    test('it renders', () => {
        render(
        <Router >
           <Category /> 
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
           <Category /> 
        </Router>
        )
        const heading = screen.getByRole('button', { 
            name: /Go to difficulty selection/i 
          });
        expect(heading).toBeInTheDocument();
    });

});