import { Project, Tag } from "../../../types"

type PropsTypes = Pick<Project, "stack">

const Stack = ({ stack } : PropsTypes) => {
  return (
    <div className="flex gap-4 items-center self-start">
      {
        stack.map((el: Tag) => {
          return(
            <div className="flex flex-col items-center">
              <img className="w-4 h-4" src={el.icon} alt={el.tag} />
              <p className="text-[10px] text-zinc-400">{el.tag}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Stack