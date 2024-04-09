import { Link } from "react-router-dom"
import { Logo, LogoFillBlack } from "../svgElements/svgElements"
import { PiBellLight, PiGearLight, PiPencilSimpleLineThin, PiUserCircleLight } from "react-icons/pi"
import { contextsType } from "../../types/types"
import { Contexts } from "../../contexts/contexts"
import { useContext } from "react"
import { googleLogout } from "@react-oauth/google"
import { maskData } from "../../utils/maskData"

const NavBarLogin = () => {
  const { utils, setUtils } = useContext(Contexts) as contextsType
  const { accessToken, theme } = utils

  return (
    <>
      <nav className="flex items-center justify-center h-[57px] bg-base-100 border-b-[1px] border-zinc-200 z-20">
        <div className="flex items-center justify-between w-[100%] mx-[24px] my-[0] sm:mx-[32px]">
          <div className="flex items-center gap-3">
            <Link to={"/"} onClick={() => location.reload()} className="btn bg-transparent border-none px-0 hover:bg-transparent cursor-pointer">
              {
                theme === 'dark' ?
                  <Logo />
                  :
                  <LogoFillBlack />
              }
            </Link>
            <input
              type="search"
              placeholder="Search"
              id="home-search"
              name="home-search"
              className={`${theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100'} ${'input rounded-full h-[40px] w-[230px] hidden sm:block focus:outline-none focus:border-none'}`}
              onChange={(e) => console.log(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-3">
            <button className="btn btn-ghost flex items-center gap-3 min-h-[40px] h-[40px] border-[1px] border-zinc-200 hover:bg-zinc-100 rounded-full px-4">
              <PiPencilSimpleLineThin size={18} />
              <span className="font-light">Write</span>
            </button>
            <button className="btn btn-ghost flex items-center justify-center min-h-[40px] p-0 w-[40px] h-[40px] rounded-full hover:bg-zinc-100">
              <PiBellLight size={24} />
            </button>
            <div className="dropdown dropdown-end">
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar hover:bg-zinc-100">
                <div className="w-[40px] h-[40px] rounded-full">
                  {
                    accessToken.picture ?
                      <img alt="user-profile" src={accessToken.picture} />
                      :
                      null
                  }
                </div>
              </div>
              <ul tabIndex={0} className="mt-3 z-[10] p-2 gap-1 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                <li>
                  <a className="justify-between py-1">
                    <div className="flex items-center gap-2">
                      <PiUserCircleLight size={18} />
                      <span>Profile</span>
                    </div>
                    <span className="badge">New</span>
                  </a>
                </li>
                <li>
                  <a className="py-1">
                    <PiGearLight size={18} />
                    <span>Settings</span>
                  </a>
                </li>
                <hr />
                <li>
                  <a
                    className="flex flex-col items-start leading-[10px] py-2"
                    onClick={() => {
                      googleLogout()
                      localStorage.removeItem('token')
                      setUtils({ ...utils, tokenBool: true })
                    }}
                  >
                    <span className="text-red-500">Sign out</span>
                    <span className="text-[13px] text-zinc-400">
                      {
                        accessToken.email ?
                          maskData(accessToken.email)
                          :
                          null
                      }
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBarLogin