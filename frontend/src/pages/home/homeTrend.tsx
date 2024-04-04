import { PiTrendUpLight } from "react-icons/pi"
import HomeTrendList from "./homeTrendList"

const HomeTrend = () => {
  const trenlist = [
    {
      id: 'test1',
      no: 1,
      username: '@test1',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, assumenda illo. Obcaecati praesentium et omnis sunt, sint impedit recusandae magnam repellendus, blanditiis quidem dolorem placeat, culpa soluta labore commodi qui?',
      published: '29 Mar 2024'
    },
    {
      id: 'test2',
      no: 2,
      username: '@test2',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, assumenda illo. Obcaecati praesentium et omnis sunt, sint impedit recusandae magnam repellendus, blanditiis quidem dolorem placeat, culpa soluta labore commodi qui?',
      published: '29 Mar 2024'
    },
    {
      id: 'test3',
      no: 3,
      username: '@test3',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, assumenda illo. Obcaecati praesentium et omnis sunt, sint impedit recusandae magnam repellendus, blanditiis quidem dolorem placeat, culpa soluta labore commodi qui?',
      published: '29 Mar 2024'
    },
    {
      id: 'test4',
      no: 4,
      username: '@test4',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, assumenda illo. Obcaecati praesentium et omnis sunt, sint impedit recusandae magnam repellendus, blanditiis quidem dolorem placeat, culpa soluta labore commodi qui?',
      published: '29 Mar 2024'
    },
    {
      id: 'test5',
      no: 5,
      username: '@test5',
      title: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum, assumenda illo. Obcaecati praesentium et omnis sunt, sint impedit recusandae magnam repellendus, blanditiis quidem dolorem placeat, culpa soluta labore commodi qui?',
      published: '29 Mar 2024'
    },
  ]

  return (
    <aside className="max-w-[100%] w-[100%] mt-[20px] border-b-[1px] px-[20px] border-zinc-200 sm:mt-0 md:py-0 md:border-b-transparent md:max-w-[30%] md:w-[30%]">
      <div className="flex items-center gap-3">
        <h4 className="text-h4 font-bold">Trending Now</h4>
        <PiTrendUpLight size={24} />
      </div>
      <div className="flex flex-col gap-5 pt-3 pb-7">
        {
          trenlist.map((items, index) => (
            <HomeTrendList
              trenList={items}
              key={index} />
          ))
        }
      </div>
    </aside>
  )
}

export default HomeTrend