import { useState } from "react"

const useDarkTheme = () => {

    const preference = window.matchMedia("(prefers-color-scheme: dark)")
    const [darkTheme, setDarkTheme] = useState(() => {
        // CHECK IF CLIENT HAS DARK THEME AS DEFAULT
        if (preference.matches) return true
        return false
    })

    if (darkTheme) document.querySelector("html")?.classList.add("dark")
    else document.querySelector("html")?.classList.remove("dark")

    return { darkTheme, setDarkTheme }
}

export default useDarkTheme