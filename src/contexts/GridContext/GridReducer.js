import { COPYITEM, PASTEITEM, UPDATEGRID } from './GridPropTypes'



const handlers = {
    [COPYITEM]: (gridState, { payload }) => ({
        ...gridState,
        copyGrid: gridState.copyGrid.map(arr => {
            return arr.map(item => {
                if (item === payload) {
                    item.clicked = true;
                } else {
                    if (item.clicked) item.clicked = false;
                }
                return item
            })
        }),
        pasteGrid: gridState.pasteGrid.length === 0 ? gridState.copyGrid : gridState.pasteGrid,
        curValue: payload
    }),

    [PASTEITEM]: (gridState, { payload }) => ({
        ...gridState,

        copyGrid: gridState.copyGrid.map(arr => {
            return arr.map(item => {
                if (item === payload && payload === gridState.curValue) {
                    return 0
                } else { return item }
            })
        }),
        curValue: payload === gridState.curValue ? {} : gridState.curValue
    }),

    [UPDATEGRID]: (gridState, { payload }) => ({
        ...gridState,
        copyGrid: payload,
        pasteGrid: [],
        curValue: {}
    }),

    DEFAULT: state => state
}

export const gridReducer = (gridState, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(gridState, action)
}