import React, { createContext } from "react";
import { useLocalStorageState } from '../../Utils/LocalStorageState'



export const LocalStorageContext = createContext();

export const LocalStorageContextProvider = ({ children }) => {


    const [history, setHistory] = useLocalStorageState('copy-paste-game', {})



    const historySetter = (val) => {
        setHistory(val)
    }

    return (
        <LocalStorageContext.Provider value={{
            history, historySetter
        }}>
            {children}
        </LocalStorageContext.Provider>
    )
}
