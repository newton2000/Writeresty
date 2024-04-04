import ModalSignIn from "../../components/modals/modalSignIn"
import ModalSignUp from "../../components/modals/modalSignUp"
import NavBarUnLogin from "../../components/navBar/navBarUnLogin"
import HomeFeed from "./homeFeed"
import HomeHead from "./homeHead"
import HomeTren from "./homeTrend"

const HomeUnLogin = () => {

  return (
    <main>
      <NavBarUnLogin />
      <HomeHead />
      <div className="flex items-center justify-center">
        <div className="flex justify-between gap-3 max-w-[1192px] my-[20px] flex-col-reverse sm:mx-[64px] md:flex-row md:my-[50px]">
          <HomeFeed />
          <HomeTren />
        </div>
      </div>
      <ModalSignIn />
      <ModalSignUp />
    </main>
  )
}

export default HomeUnLogin