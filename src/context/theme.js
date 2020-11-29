import React, { createContext, useState } from "react"

export const ThemeContext = createContext() 

const ThemeProvider = ( props ) => {
    const [ darkMode, setDarkMode ] = useState(false)
    return (
        <div>
            <ThemeContext.Provider value={[darkMode, setDarkMode]}>
                {props.children}
            </ThemeContext.Provider>
        </div>
    )
}

export default ThemeProvider;