import { createContext, useState } from "react";
// TODO: Create a ThemeContext using createContext()
export const ThemeContext = createContext();
// TODO: Define and export a ThemeProvider that will manage theme state
export function ThemeProvider({ children }) {
    //Define global theme state
    const [theme, setTheme] = useState("light");

    return(
        //Provide theme state and toggle function to all components 
        <ThemeContext.Provider value={{ theme, setTheme }}>{children}</ThemeContext.Provider>
    );
}


