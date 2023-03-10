import { alarm } from "./alarm.js";
import { changeActiveBtn } from "./control.js";
import { state } from "./state.js";
import { showTodo, updateTodo } from "./todo.js";
import { addZero } from "./util.js";

const minutesElem = document.querySelector('.time__minutes');
const secondsElem = document.querySelector('.time__seconds')


export const showTime = (seconds) => {
    minutesElem.textContent = addZero(Math.floor(seconds / 60));
    secondsElem.textContent = addZero(seconds % 60);
};

const title = document.title;

export const startTimer = () => {
const countdown = new Date().getTime() + state.timeLeft * 1000;

    state.timerId = setInterval(() => {
        
        state.timeLeft--;
        showTime(state.timeLeft);

        document.title = state.timeLeft;

        if (!(state.timeLeft % 5)) {
            const now = new Date().getTime();
            state.timeLeft = Math.floor((countdown - now) / 1000);
        }

        if (state.timeLeft > 0 && state.isActive) {
    return;
}
 document.title = title;
 clearTimeout (state.timerId);
 
    if (state.status === 'work'){
        state.activeTodo.pomodoro += 1;
        updateTodo(state.activeTodo);

        if (state.activeTodo.pomodoro % state.count) {
            state.status = 'break'
        } else {
            state.status = 'relax'
        }

        state.status = 'break'
    } else {
        state.status = 'work'
    }

    alarm();
    state.timeLeft = state[state.status] * 60;
    changeActiveBtn(state.status);
    showTodo();
    startTimer();
}, 1000)
}


//отобразить на странице
        // state.timeLeft--;
        // showTime(state.timeLeft);

// if (state.timeLeft > 0 && state.isActive) {
//     state.timerId = setTimeout(startTimer, 1000);
// }

