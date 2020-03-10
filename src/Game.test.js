import React from 'react';
import { render } from '@testing-library/react';
import Game from './Game';


describe("井字棋游戏", () => {
    test("棋盘中有9个格子", () => {
        const { getAllByRole } = render(<Game />);

        const squares = getAllByRole('button');
        expect(squares).toHaveLength(9);
    });
});
