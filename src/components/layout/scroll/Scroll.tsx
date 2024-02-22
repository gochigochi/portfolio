import { motion, useScroll } from "framer-motion"

const Scroll = () => {

    const { scrollYProgress: scaleX } = useScroll()

    return (
        <div className="fixed top-0 left-0 w-full h-[3px] bg-zinc-100 dark:bg-zinc-800 rounded-full overflow-hidden z-50">
            <motion.div className={`w-full h-full bg-[#6BAF8D]/50 origin-left scale-x-[90%]`} style={{scaleX}}/>
        </div>
    )
}

export default Scroll