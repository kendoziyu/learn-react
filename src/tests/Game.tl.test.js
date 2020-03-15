import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Game from './Game';

test("Game 静态渲染", () => {
    const { getByText, getAllByRole } = render(<Game />);

    const squares = getAllByRole('button');
    // 三连棋有9个格子
    expect(squares).toHaveLength(9);

    // 每个格子一开始都没有值
    squares.forEach((item) => {
        expect(item.textContent).toBeFalsy();
    })
});

test("点击方格", () => {
    const { getAllByRole } = render(<Game />);

    // 点击之前没有值
    expect(getAllByRole('button')[0].textContent).toBeFalsy();

    // 模拟点击一次 第1格，点击后，值变为 X
    fireEvent.click(getAllByRole('button')[0]);
    expect(getAllByRole('button')[0].textContent).toBe('X');

    // 模拟点击一次 第1格,点击后，值不发生改变
    fireEvent.click(getAllByRole('button')[0]);
    expect(getAllByRole('button')[0].textContent).toBe('X');

    // 模拟点击一次 第2个，点击后，交替出现 O
    fireEvent.click(getAllByRole('button')[1]);
    expect(getAllByRole('button')[1].textContent).toBe('O');
});

test("状态栏", () => {
    render(<Game />);

    // 通过 document 寻找选择器
    const status = document.querySelector('.status');
    expect(status.textContent).toMatch(/Next Player is X/i);

});