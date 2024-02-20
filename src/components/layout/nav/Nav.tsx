import ThemeToggleBtn from "../../buttons/theme_toggle/ThemeToggleBtn"

const Nav = () => {

    return (
        <header className="grid section h-44">
            <div className="sticky top-5 right-0 self-start flex justify-end">
                <ThemeToggleBtn />
            </div>
            <div className="flex items-end">
                <picture>
                    <source srcSet="/avatar.webp" type="image/webp" />
                    <img src="/avatar.jpg" alt="avatar" className="w-16 h-16 rounded-full"/>
                </picture>
            </div>
        </header>
    )
}

export default Nav