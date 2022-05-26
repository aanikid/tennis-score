import React from "react";
import '@testing-library/jest-dom';
import {render, fireEvent, screen} from "../../utils/test-setup";
import {pointScored} from "../../redux/actions/TennisActions";
import store from "../../redux/store";
import {Buttons} from "../Buttons";

describe('Button',() => {
    beforeEach(() => {
        render(<Buttons action={pointScored()} title={'Super button'} />);
    });

    test('should render correctly', async () => {
        expect(screen.getByRole('button')).toBeInTheDocument();
    });

    test('should have the correct title', async () => {
        expect(screen.getByRole('button')).toHaveTextContent('Super button');
    });

    test('should dispatch action on click', async () => {
        expect(store.getState().tennis.player1.score || store.getState().tennis.player2.score).toBe(0);
        fireEvent.click(screen.getByText('Super button'));
        expect(store.getState().tennis.player1.score || store.getState().tennis.player2.score).toBe(15);
    });
})