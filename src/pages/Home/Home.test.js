import { default as Home } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Category', () => {

    test('it renders', () => {
        render(
        <Router >
           <Home /> 
        </Router>
        )
        const heading = screen.getByRole('heading', {level: 1});
        expect(heading.textContent).toMatch(/dumbfounded/i);
    });

});