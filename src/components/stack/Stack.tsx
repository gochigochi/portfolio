import { StackTypes } from "../../types"

type PropsTypes = {
    title?: string
    stack: StackTypes
}

const Stack = ({ title, stack } : PropsTypes) => {
    
    return (
        <div className="box w-full rounded-2xl p-4 grid gap-2">
            {title? <h3 className="bottom-border">{title}</h3> : null}
            <ul className="flex gap-[5%]">
                {
                    stack.map(el => (
                        <li key={el.id} data-text={el.alt} className="tooltip">
                            <img className="w-6 h-6" src={el.src} alt={el.alt} />
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Stack
