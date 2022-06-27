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

});