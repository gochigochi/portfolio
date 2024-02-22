import Social from "../social/Social"

const Hero = () => {
    return (
        <section className="section">
            <div className="max-w-2xl flex flex-col gap-4">
                <div>
                    <h3 className="font-semibold">Diego Eliseo Iovane</h3>
                    <h1 className="font-bold text-4xl tracking-tight sm:text-5xl relative -left-[2px]">Front End Developer</h1>
                </div>
                <p>Desarrollador web front end hace ~ 4 años. Trabajé en empresas y de forma freelance con varios clientes, tanto de Argentina como del exterior.</p>
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="order-last lg:order-first">
                        <Social />
                    </div>
                    <div className="flex flex-col gap-4 lg:flex-row order-first lg:order-last">
                        <div className="flex items-center gap-1">
                            <svg className="w-[18px] h-[18px]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            <span className="text-xs">diegoeliseoiovane@gmail.com</span>
                        </div>
                        <div className="flex items-center gap-1">
                            <svg className="icons w-[18px] h-[18px]" stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"></path>
                            </svg>
                            <span className="text-xs">Buenos Aires, Argentina</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero