import { PiBookmarkSimpleLight, PiDotsThreeBold } from "react-icons/pi"
import { contextsType, feedListProps } from "../../types/types"
import { getAccessToken } from "../../auth/func/accessFunc"
import { Contexts } from "../../contexts/contexts"
import { useContext } from "react"

type feedList = {
  feedList: feedListProps
}

const HomeFeedList = (feed: feedList) => {
  const { utils } = useContext(Contexts) as contextsType
  const { description, id, imageurl, name, published, readtime, tag, title, profileurl } = feed.feedList
  return (
    <div
      key={id}
      className="flex items-center justify-between gap-3 border-b-[1px] pb-[20px] border-zinc-200">
      <div className="flex flex-col gap-1 max-w-[70%]">
        <div className="flex items-center gap-2">
          <div className="avatar items-center gap-1 sm:gap-2 cursor-pointer"
            onClick={() => console.log('userId')}
          >
            <div className="w-[24px] rounded-full">
              <img src={profileurl} alt="profile-image" />
            </div>
            <span className="text-[13px] font-bold">{name}</span>
          </div>
          <div className="flex flex-wrap items-center gap-1 sm:gap-2">
            <div className="text-[8px]">•</div>
            <span className="text-[13px] cursor-pointer" onClick={() => console.log('tag')}>{tag}</span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <div className="cursor-pointer"
            onClick={() => { console.log(id) }}
          >
            <h2 className="text-[20px] font-bold text-primary max-w-[600px] max-h-[100px] line-clamp-2 text-ellipsis">{title}</h2>
            <div className="hidden sm:block">
              <span className="max-w-[600px] text-[16px] text-gray-500 max-h-[50px] line-clamp-2 text-ellipsis visible">{description}</span>
            </div>
          </div>
          <div className="flex items-center justify-between mt-7">
            <div className="flex items-center gap-3 cursor-pointer"
              onClick={() => { console.log(id) }}
            >
              <div className="bg-gray-200 text-[13px] text-black max-w-[max-content] px-3 py-1 rounded-[16px]">{readtime}</div>
              <div className="text-[8px]">•</div>
              <span className="text-[13px]">{published}</span>
            </div>
            {
              getAccessToken(utils.tokenBool) ?
                <div className="flex items-center gap-3">
                  <button
                    className="flex items-center justify-center btn btn-ghost max-w-[max-content] min-h-[max-content] w-[24px] h-[24px] p-0 text-zinc-500 hover:bg-transparent hover:text-zinc-900"
                    onClick={() => console.log('bookmark')}
                  >
                    <PiBookmarkSimpleLight size={24} />
                  </button>
                  <button
                    className="flex items-center justify-center btn btn-ghost max-w-[max-content] min-h-[max-content] w-[24px] h-[24px] p-0 text-zinc-500 hover:bg-transparent hover:text-zinc-900"
                    onClick={() => console.log('menu')}
                  >
                    <PiDotsThreeBold size={24} />
                  </button>
                  <button></button>
                </div>
                :
                null
            }
          </div>
        </div>
      </div>
      <img src={imageurl} alt="feed-banner-image" className="rounded-[8px] aspect-[100/67] max-w-[100px] max-h-[67px] w-[100px] h-[67px] overflow-clip sm:rounded-[16px] sm:aspect-[200/134] sm:max-w-[200px] sm:max-h-[134px] sm:w-[200px] sm:h-[134px] cursor-pointer" loading="lazy"
        onClick={() => { console.log(id) }}
      />
    </div>
  )
}

export default HomeFeedList