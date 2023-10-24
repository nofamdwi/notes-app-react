import { useState, useEffect } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md"

const ToggleDarkMode = () => {
    const [darkMode, setDarkMode] = useState(null);
    
    useEffect(() => {
        if (darkMode === "dark") {
            document.documentElement.classList.add("dark")
        } else {
            document.documentElement.classList.remove("dark");
        }
    }, [darkMode])

    const toggleHandler = () => {
        setDarkMode(darkMode === "dark" ? "light" : "dark");
    }
    return (
        <button onClick={toggleHandler}>
            {darkMode === 'dark' ?
                <MdLightMode color="white" size='1.5rem' /> :
                <MdDarkMode  size='1.5rem' /> 
            }
        </button>
    );
}

export default ToggleDarkMode;