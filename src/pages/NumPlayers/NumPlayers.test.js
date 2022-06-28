import { default as NumPlayers } from '.';
import { screen, render } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Category', () => {

    test('it renders', () => {
        render(
        <Router >
            <NumPlayers />
        </Router>
        )
        const heading = screen.getByRole('heading', { level: 1 });
        expect(heading.textContent).toMatch(/number of players/i);
    });
    

});