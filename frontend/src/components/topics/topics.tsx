import { PiPlusLight } from "react-icons/pi"
import { topicType } from "../../types/types"
import { useState } from "react"

type topicsType = {
  fakeData: topicType[]
}
const Topics = (topics: topicsType) => {
  const { fakeData } = topics
  const [selectTopic, setSelecTopic] = useState('t-00')
  return (
    <div className="flex items-center gap-3 h-[55px] px-3 bg-base-100 border-b-[1px] border-zinc-200 sticky top-0 md:w-[70%] md:max-w-[70%] z-10">
      <button className="flex items-center justify-center btn btn-ghost p-0 text-zinc-600 rounded-full border-[1px] border-zinc-200 min-h-[35px] h-[35px] w-[35px]">
        <PiPlusLight size={24} />
      </button>
      {
        fakeData.map((items, index) => (
          <button
            key={index}
            onClick={() => setSelecTopic(items.topicId)}
            className={`${items.topicId === selectTopic ? "bg-zinc-100 border-zinc-100" : ""} flex items-center justify-center btn btn-ghost text-zinc-600 max-w-[max-content] rounded-full border-[1px] border-zinc-200 min-h-[35px] h-[35px]`}
          >
            {items.topicName}
          </button>
        ))
      }
    </div>
  )
}

export default Topics