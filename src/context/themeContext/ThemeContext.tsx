import React, { createContext } from 'react'

interface ThemeContextProps {
    theme: any; //TODO:
    setDarkTheme: () => void;
    setLightTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps)

const theme = {};

export const ThemeProvider = ({ children }: any) => {

    const setDarkTheme = () => {
        console.log('setDarkTheme')
    }

    const setLightTheme = () => {
        console.log('setLightTheme')
    }
    return (
        <ThemeContext.Provider value={{
            theme,
            setDarkTheme,
            setLightTheme

        }}>
            {children}
        </ThemeContext.Provider>
    )
}