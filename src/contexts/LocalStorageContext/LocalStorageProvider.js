import React, { createContext, useContext } from "react";
import { useLocalStorageState } from '../../Utils/LocalStorageState'
import { GridContext } from '../GridContext/GridProvider'



export const LocalStorageContext = createContext();

export const LocalStorageContextProvider = ({ children }) => {
    const { grid } = useContext(GridContext)
    const [history, setHistory] = useLocalStorageState('copy-paste-game', grid)

    return (
        <LocalStorageContext.Provider value={{
            history, setHistory
        }}>
            {children}
        </LocalStorageContext.Provider>
    )
}
