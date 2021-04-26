export const TIMER = 'TIMER'
export const START = 'START'
export const RESET = 'RESET'
const handlers = {
    [TIMER]: (timerState, { payload }) => ({
        ...timerState,
        timer: timerState.timer + payload,
    }),
    [START]: (timerState) => ({
        ...timerState, start: true
    }),
    [RESET]: (timerState) => ({
        ...timerState, timer: 0, start: false
    }),


    DEFAULT: state => state
}

export const timerReducer = (timerState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(timerState, action)
}