import { academic } from "../../consts/academic"
import { Grade } from "../../types"

const Academic = () => {
    return (
        <div>
            <div className="box w-full rounded-2xl p-4 grid gap-2">
                <h3 className="text-xl font-bold bottom-border">Estudios</h3>
                <dl className="grid gap-2 divide-y-[1px] divide-zinc-200">
                    {
                        academic.map((el: Grade) => {
                            return (
                                <div key={el.id} className="mb-2 pt-2 grid gap-[1px]">
                                    <dt className="flex flex-wrap items-end divide-x-2 divide-zinc-400">
                                        <span className="text-xl font-semibold mr-2">{el.title}</span>
                                        <span className="text-xl text-zinc-400 pl-2">{el.year}</span>
                                    </dt>
                                    <dd className="text-zinc-400">{el.school}</dd>
                                </div>
                            )
                        })
                    }
                </dl>
            </div>
        </div>
    )
}

export default Academic