import { createContext, useState } from "react";


export const AppContent = createContext()


export const AppContentProvider = (props)=>{

    const backendUrl = import.meta.env.VITE_BACKEND_URL
    const [isLoggedin, setIsLoginedin] = useState(false)
    const [userData, setUserData] = useState(false)

    const value = {
        backendUrl,
        isLoggedin,
        setIsLoginedin,
        userData,
        setUserData
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}