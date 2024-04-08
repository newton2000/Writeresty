import HomeFeedList from "./postList"

const HomeFeed = () => {

  const feedList = [
    {
      id: 'test1',
      name: 'test1 test1',
      published: '29 Mar 2024',
      tag: 'Developer',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique minima consectetur deserunt hic veniam?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vero recusandae nulla, reiciendis repudiandae voluptates dolore quam ipsam amet perspiciatis sequi corrupti ex nostrum tenetur animi? Dicta quidem esse, ea provident nihil asperiores temporibus architecto cumque consectetur sit accusantium labore doloribus voluptas itaque incidunt quisquam quia quod. Esse dignissimos, ipsum quaerat impedit, vitae velit ipsa ratione dolorum perferendis deleniti odit, tempore magnam blanditiis cum quia reiciendis? Ex quod incidunt, odit tempora tempore corrupti omnis quisquam dolorum? Atque esse deleniti cumque asperiores in ut eaque reprehenderit doloremque provident accusamus, consequuntur fuga sint explicabo quaerat! Est quasi voluptatum eum dolorem labore modi.',
      readtime: '1 min read',
      profileurl: 'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s900-c85.webp',
      imageurl: 'https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?w=996'
    },
    {
      id: 'test2',
      name: 'Lorem ipsum dolor sit amet ',
      published: '23 Mar 2024',
      tag: 'Design',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique minima consectetur deserunt hic veniam?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vero recusandae nulla, reiciendis repudiandae voluptates dolore quam ipsam amet perspiciatis sequi corrupti ex nostrum tenetur animi? Dicta quidem esse, ea provident nihil asperiores temporibus architecto cumque consectetur sit accusantium labore doloribus voluptas itaque incidunt quisquam quia quod. Esse dignissimos, ipsum quaerat impedit, vitae velit ipsa ratione dolorum perferendis deleniti odit, tempore magnam blanditiis cum quia reiciendis? Ex quod incidunt, odit tempora tempore corrupti omnis quisquam dolorum? Atque esse deleniti cumque asperiores in ut eaque reprehenderit doloremque provident accusamus, consequuntur fuga sint explicabo quaerat! Est quasi voluptatum eum dolorem labore modi.',
      readtime: '2 min read',
      profileurl: 'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s900-c85.webp',
      imageurl: 'https://img.freepik.com/free-vector/graphic-designer-landing-page-template_23-2150841917.jpg?t=st=1711703838~exp=1711707438~hmac=1b31fee6f35fcac27879146e4fa21b1f74d19e88c1b57f512a7d96f102da4557&w=1060'
    },
    {
      id: 'test3',
      name: 'test3 test3',
      published: '25 Mar 2024',
      tag: 'Travel',
      title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta similique minima consectetur deserunt hic veniam?',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto vero recusandae nulla, reiciendis repudiandae voluptates dolore quam ipsam amet perspiciatis sequi corrupti ex nostrum tenetur animi? Dicta quidem esse, ea provident nihil asperiores temporibus architecto cumque consectetur sit accusantium labore doloribus voluptas itaque incidunt quisquam quia quod. Esse dignissimos, ipsum quaerat impedit, vitae velit ipsa ratione dolorum perferendis deleniti odit, tempore magnam blanditiis cum quia reiciendis? Ex quod incidunt, odit tempora tempore corrupti omnis quisquam dolorum? Atque esse deleniti cumque asperiores in ut eaque reprehenderit doloremque provident accusamus, consequuntur fuga sint explicabo quaerat! Est quasi voluptatum eum dolorem labore modi.',
      readtime: '3 min read',
      profileurl: 'https://media.npr.org/assets/img/2022/11/08/ap22312071681283-0d9c328f69a7c7f15320e8750d6ea447532dff66-s900-c85.webp',
      imageurl: 'https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan_335224-1.jpg?w=1060&t=st=1711703807~exp=1711704407~hmac=717c97ce28ef7bbfa482843e72ca94aff6cc07df2f9fb34e6f8c5d62c4b288aa'
    },
  ]

  return (
    <section className="max-w-[100%] w-[100%] px-[20px] mt-[30px] md:px-0 md:mt-0 sm:mr-[32px] md:w-[70%] md:max-w-[70%]">
      <div className="flex flex-col gap-[20px]">
        {
          feedList.map((items, index) => (
            <HomeFeedList
              feedList={items}
              key={index}
            />
          ))
        }
      </div>
    </section>
  )
}

export default HomeFeed