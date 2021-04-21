import React, { useReducer, createContext, useState } from "react";
import { gridReducer } from './GridReducer'
import { COPYITEM, PASTEITEM, UPDATEGRID } from './GridPropTypes'
import { generateMatrix } from '../../Utils/ArrConvertor'
import { randomColor, randomId } from '../../Utils/Randomizer'


export const GridContext = createContext();


export const GridContextProvider = ({ children }) => {


    const assignObjects = (matrix) => {
        return matrix.map(value => {
            return value.map(() => {
                return {
                    id: randomId(),
                    color: randomColor(),
                    clicked: false
                }
            })
        })
    }

    const [dif, setDif] = useState(5)

    const initialState = {
        copyGrid: assignObjects(generateMatrix(dif)),
        pasteGrid: [],
        curValue: {},
    }
    const [state, dispatch] = useReducer(gridReducer, initialState)


    const action = (sign) => {
        if (sign === '+') {
            if (dif < 10) {
                setDif(dif + 1)
                dispatch({ type: UPDATEGRID, payload: assignObjects(generateMatrix(dif + 1)) })
            }
        }
        if (sign === '-') {
            if (dif > 3) {
                setDif(dif - 1)
                dispatch({ type: UPDATEGRID, payload: assignObjects(generateMatrix(dif - 1)) })
            }
        }
        if (sign === 'reset') {
            setDif(dif)
            dispatch({ type: UPDATEGRID, payload: assignObjects(generateMatrix(dif)) })
            setLifes(3)
            setRotate(false)
        }
        return sign
    }


    const [rotate, setRotate] = useState(false);
    const handleChange = (event) => {
        setRotate(event.target.checked)
    };






    const copyItem = (item) => {
        dispatch({ type: COPYITEM, payload: item })
    }

    const pasteItem = (item) => {
        dispatch({ type: PASTEITEM, payload: item })
    }


    const [lifes, setLifes] = useState(3)

    const lifeChanger = (sign) => {
        if (sign === '+') {
            if (lifes < 7) {
                setLifes(lifes + 1)
            }
        }
        if (sign === '-') {
            if (lifes > 0) {
                setLifes(lifes - 1)
            }
        }
        return sign
    }

    return (
        <GridContext.Provider value={{
            grid: state,
            copyItem,
            pasteItem,
            dif,
            action,
            rotate,
            handleChange,
            lifes, lifeChanger
        }}>
            {children}
        </GridContext.Provider>
    )
}
