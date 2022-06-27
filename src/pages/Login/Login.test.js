import { default as Login } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Category', () => {

    test('it renders', () => {
        render(
        <Router >
            <Login />
        </Router>
        )
        const heading = screen.getByRole('heading', { level: 2 });
        expect(heading.textContent).toMatch(/login/i);
    });

});