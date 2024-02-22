import { Experience } from "../../types"
import { experience } from "../../consts/experience"

const Experience = () => {
  return (
    <div>
      <div className="box w-full rounded-2xl p-4 grid gap-2">
        <h3 className="text-xl font-bold bottom-border">Experiencia</h3>
        <dl className="grid gap-2 divide-y divide-zinc-300 dark:divide-zinc-700 ">
          {
            experience.map((el: Experience) => {
              return (
                <div key={el.id} className="mb-2 pt-2 grid gap-[1px]">
                  <dt className="text-xl font-semibold">{el.title}</dt>
                  <dd className="flex flex-wrap items-end gap-x-3">
                    <p className="text-xl">{el.company}</p>
                    <p className="text-zinc-500">{el.period}</p>
                  </dd>
                  <dd className="leading-4 text-xs text-zinc-500">{el.description}</dd>
                </div>
              )
            })
          }
        </dl>
      </div>
    </div>
  )
}

export default Experience