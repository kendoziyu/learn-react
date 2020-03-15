import React from 'react'
import {render, unmountComponentAtNode} from 'react-dom'
import Game, {Clock} from '../Game'

let container = null;
beforeEach(() => {
  // 创建一个 DOM 元素作为渲染目标
  container = document.createElement("div");
  // container *必须* 附加到 document，事件才能正常工作。
  document.body.appendChild(container);
});

afterEach(() => {
  // 退出时进行清理
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});


test("Game 静态渲染", () => {

    render(<Game />, container)
    
    const btns = container.getElementsByTagName('button');
    // 三连棋有9个格子
    expect(btns.length).toBe(9);

    // 每个格子一开始都没有值
    for (let index = 0; index < btns.length; index++) {
        const element = btns[index];
        expect(element.innerText).toBeFalsy();
        expect(element.textContent).toBeFalsy();
        expect(element.nodeValue).toBeFalsy();
        expect(element.innerHTML).toBeFalsy();
    }
});

test("点击方格", () => {
    // container *必须* 附加到 document，事件才能正常工作。
    document.body.appendChild(container);

    render(<Game />, container)

    const btns = container.getElementsByTagName('button');
    const rand = Math.floor(Math.random() * btns.length);
    const another = btns.length - rand; 

    expect(rand).not.toBe(another);
    // 点击之前没有值
    expect(btns[rand].innerHTML).toBeFalsy();
    // 连续点击三次仍然是 X
    for (let index = 0; index < 3; index++) {
        btns[rand].dispatchEvent(new MouseEvent('click', { bubbles: true}));
    }
    expect(btns[rand].textContent).toBe('X');
    // 模拟点击一次 第2个，点击后，交替出现 O
    btns[another].dispatchEvent(new MouseEvent('click', { bubbles: true}));
    expect(btns[another].textContent).toBe('O');
});

test("状态栏", () => {

    render(<Game />, container);

    const status = document.querySelector('.status');
    expect(status.innerHTML).toMatch(/Next Player: X/i);

});

jest.useFakeTimers();

test("时钟", () => {
    render(<Clock />, container);

    const clock = document.querySelector('.clock');

    expect(setInterval).not.toBeCalled();

    jest.advanceTimersByTime(1000);

    expect(setInterval).toHaveBeenCalledTimes(1);
    expect(setInterval).toHaveBeenLastCalledWith(expect.any(Function), 1000);
});