import { trenListProps } from "../../types/types"

type trenList = {
  trenList: trenListProps
}

const HomeTrendList = (list: trenList) => {
  const { id, no, published, title, username } = list.trenList

  return (
    <div
      key={id}
      className="flex items-center gap-5 cursor-pointer"
      onClick={() => { console.log(id) }}
    >
      <h1 className="text-[52px] font-bold text-gray-100 md:text-[36px] lg:text-[52px]">{String(no).length <= 1 ? '0' + no : no}</h1>
      <div>
        <div className="flex flex-wrap items-center gap-[5px]">
          <span >{username}</span>
          <span className="text-[8px]">•</span>
          <span>{published}</span>
        </div>
        <h3 className="text-h3 text-primary leading-[24px] font-bold max-w-[250px] max-h-[80px] sm:max-w-[700px] md:max-w-[250px] line-clamp-2 overflow-ellipsis">{title}</h3>
      </div>
    </div>
  )
}

export default HomeTrendList