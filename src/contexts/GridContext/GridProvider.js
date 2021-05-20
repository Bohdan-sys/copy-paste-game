import React, { useReducer, createContext, useState, useContext, useEffect } from "react";
import { gridReducer } from './GridReducer'
import { COPYITEM, PASTEITEM, UPDATEGRID } from './GridPropTypes'
import { generateMatrix } from '../../Utils/ArrConvertor'
import { randomColor, randomId, randomEmoji } from '../../Utils/Randomizer'
import { LocalStorageContext } from "../LocalStorageContext/LocalStorageProvider";


export const GridContext = createContext();


export const GridContextProvider = ({ children }) => {

    const { history, historySetter } = useContext(LocalStorageContext)

    const assignObjects = (matrix) => {
        return matrix.map(value => {
            return value.map(() => {
                return {
                    id: randomId(),
                    color: randomColor(),
                    emoji: randomEmoji(),
                    clicked: false,
                }
            })
        })
    }

    const [dif, setDif] = useState(Object.keys(history).length <= 0 ? 6 : history.grid.copyGrid.concat().length)

    const initialState = {
        copyGrid: assignObjects(generateMatrix(dif)),
        pasteGrid: [],
        curValue: {},
    }
    const [state, dispatch] = useReducer(gridReducer, Object.keys(history).length <= 0 ? initialState : history.grid)

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



    const copyItem = (item) => {
        dispatch({ type: COPYITEM, payload: item })
    }

    const pasteItem = (item) => {
        dispatch({ type: PASTEITEM, payload: item })
    }


    const [rotate, setRotate] = useState(Object.keys(history).length <= 0 ? false : history.rotation);
    const handleChange = (event) => {
        setRotate(event.target.checked)
    };


    const [lifes, setLifes] = useState(Object.keys(history).length <= 0 ? 3 : history.lifes)
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


    useEffect(() => {
        historySetter({ grid: state, rotation: rotate, lifes: lifes })
    }, [lifes, rotate, state, historySetter])

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
