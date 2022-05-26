import React from "react";
import '@testing-library/jest-dom';
import {render, screen} from "../../utils/test-setup";
import PlayerBoard from "../PlayerBoard";

describe('PlayerBoard', () => {
   beforeEach(() => {
      render(<PlayerBoard playerId={'player1'}/>);
   });

    test('should render correctly', async () => {
        expect(screen.getByRole('img')).toBeInTheDocument();
    });
});