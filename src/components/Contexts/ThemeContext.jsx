import { createContext, useContext, useState } from "react";

//step 1 create context
export const ThemeContext = createContext();

//step 2 provide the context
export const ThemeContextProvider = ({children}) => {

    const [ theme , setTheme ] = useState("light")
    //value to be passed down
    const value = {theme,setTheme};
    
    return (
        <ThemeContext.Provider value={value}>
            {children}
        </ThemeContext.Provider>
    
    )
}
//custom hook to use the theme context

export const useTheme = () => {
    const context = useContext(ThemeContext);

    if(!context){
        throw new Error("useTheme must be used within a ThemeContextProvider")
    }

    return context;
}

