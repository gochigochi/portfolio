import Social from "../../social/Social"

const Footer = () => {
  return (
    <footer className="section flex justify-between border-t border-zinc-200 py-10 mt-20 dark:border-zinc-700/40">
        <Social />
        <p className="font-mono text-zinc-500">@diegoui</p>
    </footer>
  )
}

export default Footer