import { useState } from "react"

const useDarkTheme = () => {

    const preference = window.matchMedia("(prefers-color-scheme: dark)")
    const [darkTheme, setDarkTheme] = useState(() => {
        // CHECK IF CLIENT HAS DARK THEME AS DEFAULT
        // if (preference.matches) return true
        // return false

        //SET IT DEFAULT
        return true
    })

    if (darkTheme) {
        document.querySelector("html")?.classList.remove("light")
        document.querySelector("html")?.classList.add("dark")
        document.querySelector("html")!.style.colorScheme = "dark"
    }
    else {
        document.querySelector("html")?.classList.remove("dark")
        document.querySelector("html")?.classList.add("light")
        document.querySelector("html")!.style.colorScheme = "light"
    }

    return { darkTheme, setDarkTheme }
}

export default useDarkTheme