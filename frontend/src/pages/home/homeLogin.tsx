import NavBarLogin from "../../components/navBar/navBarLogin"

const HomeLogin = () => {
  const fakeData = {
    userId: 'uid-01',
    userName: '@test',
    fullName: 'test test',
    userUrl: '/../..',
    topics: [
      {
        topicId: 't-00',
        topicName: 'For you'
      },
      {
        topicId: 't-01',
        topicName: 'Following'
      },
      {
        topicId: 't-02',
        topicName: 'Design'
      },
      {
        topicId: 't-03',
        topicName: 'Developer'
      },
      {
        topicId: 't-04',
        topicName: 'AI'
      },
    ],
    posts: [
      {
        postId: 'p-01',
        topicId: 't-02',
        postTitle: 'UX/UI Design Trends Going Into 2024',
        postDescript: 'Every year, we have a line up of new design trends that not only look good, but also stick around and influence other designers to “steal” the trend. Love it or hate it, there are actually some design waves that are smart and functional. These functions could range from including…',
        postUrl: '/../..',
        readTime: '1 min read',
        topic: 'Design',
        pubkished: '05 April 2024',
        userPost: {
          userId: 'uid-02',
          fullName: 'test2 test2',
          userUrl: '/../..'
        }
      },
      {
        postId: 'p-02',
        topicId: 't-04',
        postTitle: '9 Free AI Animation Tools: Bring Images to Life',
        postDescript: 'There are some really easy ways to make your Midjourney images (You could also use other alternative platforms for AI image generation) more interesting for social media creating AI films or just for fun yu can make them more immersive animate them make them talk (even add their own voice) …',
        postUrl: '/../..',
        readTime: '2 min read',
        topic: 'AI',
        pubkished: '02 April 2024',
        userPost: {
          userId: 'uid-03',
          fullName: 'test3 test4',
          userUrl: '/../..'
        }
      },
      {
        postId: 'p-03',
        topicId: 't-03',
        postTitle: '🛠️ 7 React Projects to Build in 2024',
        postDescript: 'To be confident with using React, you need to build real-world projects. But what projects are worth building in 2024? I have put together a list of seven projects that I think are ideal for becoming a confident React developer, from simple to complex applications. This will give you some…',
        postUrl: '/../..',
        readTime: '3 min read',
        topic: 'Developer',
        pubkished: '04 April 2024',
        userPost: {
          userId: 'uid-04',
          fullName: 'test4 test4',
          userUrl: '/../..'
        }
      },
    ]
  }
  return (
    <>
      <NavBarLogin
        topics={fakeData.topics}
      />
      <div className="p-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus possimus amet aspernatur a illum totam ut perferendis aperiam vitae ullam facere minus quos autem minima, tenetur fugit necessitatibus? Ipsa ratione nulla a ipsum sapiente alias, ullam voluptas minima, rem illo soluta? Quod quam non dolores totam maxime, quaerat dolorum corporis eum sunt minima odit nisi rem nam pariatur. Consequatur esse velit totam quas molestiae nam aliquid, laboriosam repellendus aut veniam assumenda provident similique unde. Corporis non quaerat esse, sit reiciendis recusandae unde hic reprehenderit cumque nam, rem dolores maxime eligendi accusantium id cum laborum rerum quod dolorem ipsa veritatis. Maxime pariatur voluptate animi culpa, vitae voluptates quis voluptatem totam quidem. Fugit explicabo quis tempore suscipit omnis dicta, quos similique assumenda dignissimos, doloribus modi maxime accusantium voluptates inventore voluptatibus qui quasi provident eos. Dolorum autem officia eum assumenda quas eveniet ratione? Id modi veritatis consectetur mollitia, odio a cumque? Porro, officiis? Aspernatur aperiam error tempore quas nobis, hic exercitationem, eaque harum explicabo nesciunt suscipit omnis, non quibusdam molestiae nostrum dolorum! Qui tenetur expedita pariatur veniam quis aspernatur et, tempora, corporis natus similique excepturi quisquam facilis provident inventore officiis labore sequi corrupti placeat iusto soluta consequuntur saepe voluptatum adipisci. Quas, libero corrupti. Incidunt alias nostrum, ipsum amet tenetur esse sequi ut tempora fugit vitae reiciendis soluta deleniti sit sapiente unde, perferendis explicabo assumenda eius iusto in corporis! Vero molestias quis labore cupiditate, ea impedit adipisci quia? Animi pariatur saepe dolorem, quasi officiis accusantium! Eum, culpa amet. Blanditiis debitis adipisci facere excepturi molestias aliquid ea ducimus quod, libero quisquam vero quia maiores hic deleniti ratione itaque minima iusto similique nisi unde aperiam. Beatae omnis repudiandae deleniti aliquam, hic at maxime suscipit. Nihil aspernatur nesciunt beatae iure veniam cumque laudantium quaerat distinctio ipsa fuga harum sequi voluptatem, suscipit saepe obcaecati quia. Quibusdam maiores exercitationem officiis ducimus recusandae aliquid omnis, praesentium soluta dicta assumenda. Distinctio nemo obcaecati iusto doloribus expedita explicabo labore molestias deleniti atque enim iste laudantium odio reprehenderit perspiciatis, illo molestiae, non ducimus esse, praesentium quas quos. Omnis ipsa veniam cumque possimus alias natus quam, odio quis quas nulla obcaecati molestiae sequi animi, cum blanditiis sapiente deleniti eum explicabo! Sapiente temporibus accusantium libero dolore provident dicta, natus, cum cupiditate, sed repellendus voluptates quisquam illum assumenda? Nesciunt ea ipsa, facere explicabo amet illo exercitationem nemo ducimus corrupti debitis dolores nam, quas aperiam et a ut est voluptas atque, repellat architecto voluptatibus consectetur laboriosam esse. Dolorum, error, explicabo illo, provident rem et sapiente reprehenderit soluta dolore quis enim. Ipsa molestias vel excepturi expedita, architecto necessitatibus! Minima ea atque sed eaque quasi quis necessitatibus! Ab sint, nesciunt quisquam veniam, numquam eius possimus optio omnis in officiis adipisci ad, quae consectetur beatae maxime delectus rem consequatur itaque architecto eum. Laudantium, dolorum! Suscipit nostrum asperiores at consequatur hic odit qui ea tempora maxime iste! Provident dolor nesciunt dicta quidem adipisci, sit debitis qui sint delectus aliquid ipsam quo aliquam labore quod. Sint, voluptates. Minus harum odit ea consectetur, id, earum odio consequuntur iusto deserunt nemo alias! Quam voluptates pariatur atque inventore consequatur eum nihil numquam aperiam minima facilis deserunt quasi dolore iusto excepturi aliquid, a sed ab magni repellendus minus porro. Error voluptas voluptatibus amet, laudantium sed dicta pariatur obcaecati, vel numquam reiciendis ducimus temporibus. Modi, quibusdam accusantium minus qui totam aliquam adipisci natus deleniti beatae dolorem sint nemo blanditiis id numquam architecto atque quae. Corrupti quis repellendus quam ratione iste dolor maiores hic nemo fugit quo necessitatibus sint cum odit, quibusdam illo quae incidunt omnis ab dignissimos ducimus! Vel similique dolorum autem exercitationem tenetur ipsam odio illum ducimus laudantium? Rerum omnis esse officia deleniti repellat iure? Eius vel possimus et recusandae, atque quaerat eveniet sed quod qui reiciendis impedit minus, officia iste deleniti maiores? Enim similique quod necessitatibus hic assumenda repellendus tenetur minus iste totam delectus illum consequuntur, explicabo aperiam quis quas. Eum laudantium quis animi odio quia asperiores aperiam ipsa distinctio nam nostrum! Obcaecati deleniti ducimus quisquam nisi iure libero quibusdam similique molestiae possimus, quidem sapiente doloremque sequi et asperiores pariatur porro fugit eaque necessitatibus modi fuga ullam alias ea sunt! Ad dolor odit modi repudiandae magni nisi adipisci eligendi quidem amet ea ab, quaerat doloribus blanditiis? Natus harum quae fugit ut at, sunt possimus numquam, cumque itaque expedita labore quas accusantium atque vel blanditiis fuga repellat alias nobis sapiente? Ea impedit omnis ducimus hic repellendus. Voluptates delectus error illo ab iste, voluptatem neque maxime architecto tempora in cumque similique, totam vel id fuga, dolorum nihil a omnis minus incidunt eos deserunt saepe temporibus quod. Nostrum perferendis ipsa, odit odio assumenda, fugiat, neque temporibus ipsam quibusdam expedita numquam laboriosam a ipsum fuga consequuntur tenetur eligendi earum nesciunt corporis quo quisquam vel? Numquam sunt, temporibus quo labore accusamus odit amet debitis sint! Sapiente ducimus iusto eligendi magnam mollitia natus similique autem soluta quae expedita laboriosam obcaecati, consectetur aspernatur corporis maxime molestias, commodi id consequuntur? Et enim, itaque dicta commodi, ipsa numquam fuga rem harum rerum expedita quisquam cum minima deserunt dolore, laudantium cumque asperiores. Porro possimus consectetur vero quod hic error doloribus molestiae deserunt dolor sed officiis voluptate sequi est dolorum aliquam, quaerat maiores ea, atque magni non, dicta iure illo aperiam. Ex eum accusantium ipsum enim quam aperiam quibusdam animi, commodi iusto distinctio deleniti unde, impedit at velit beatae maxime sint reiciendis, nulla odio nisi similique. Amet, corporis magni! Commodi libero eos temporibus et a illo aperiam optio at. Libero ullam odio ipsam eos facilis illo accusamus, velit earum, reiciendis sapiente voluptate voluptatum, architecto ad alias vel molestias nam esse neque dolores ea a assumenda. Dolore itaque necessitatibus sint maiores ex esse praesentium amet accusantium molestiae, libero sed quam nihil, sapiente enim ut obcaecati repudiandae corporis atque expedita qui nostrum debitis, facere vitae et! Maiores ex molestias fuga delectus. Magni fugiat, repellendus et cupiditate, nemo fuga aliquam delectus maiores ea suscipit quas omnis quidem, saepe sint expedita numquam. Delectus unde molestiae qui, praesentium doloremque provident aliquam cum aperiam ex dicta animi possimus voluptatibus enim veritatis fuga sit velit consectetur! Id distinctio consequatur, impedit adipisci voluptas facere.</div>
    </>
  )
}

export default HomeLogin
