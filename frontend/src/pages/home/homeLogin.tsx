import NavBarLogin from "../../components/navBar/navBarLogin"
import HomeFeed from "../../components/post/postMain"

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
      <div className="flex justify-center mt-5">
        <HomeFeed />
      </div>
    </>
  )
}

export default HomeLogin
