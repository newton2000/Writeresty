import Themes from "../themes/themes"
import logo from "../../assets/images/logo.png"
import { Link } from "react-router-dom"

const NavBarLogin = () => {
  return (
    <nav className="flex items-center h-[57px] bg-base-100 border-b-2 sticky top-0">
      <div className="flex items-center justify-between w-[100%] max-w-[1192px] ml-auto mr-auto">
        <div className="flex items-center gap-3">
          <Link to={"/"} className="flex items-center gap-3 cursor-pointer">
            <img src={logo} alt="logo" className="w-[24px] h-[24px]" />
            <h2 className="text-2xl font-bold">Writeresty</h2>
          </Link>
          <input type="search" className="input input-bordered w-[200px] max-w-[200px] h-[35px] max-h-[35px] rounded-[16px] focus:outline-none" />
        </div>
        <Themes />
      </div>
    </nav>
  )
}

export default NavBarLogin