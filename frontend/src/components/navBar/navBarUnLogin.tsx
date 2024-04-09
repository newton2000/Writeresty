import { Link } from "react-router-dom"
import { Logo } from "../svgElements/svgElements"

const NavBarUnLogin = () => {
  return (
    <nav className="flex items-center justify-center h-[75px] bg-[#171717] border-b-[1px] border-zinc-700 sticky top-0 z-10">
      <div className="flex items-center justify-between w-[100%] max-w-[1192px] mx-[24px] my-[0] sm:mx-[64px]">
        <Link to={"/"} onClick={() => location.reload()} className="btn bg-transparent border-none px-0 hover:bg-transparent flex items-center gap-3 cursor-pointer">
          <Logo />
          <h1 className="text-h2 font-bold hidden text-white sm:block">Writeresty</h1>
        </Link>
        <div className="flex items-center gap-3">
          <button
            className="btn bg-[#171717] border-1 border-white text-white hover:text-white hover:bg-black hover:border-white px-5 min-h-[40px] h-[40px] rounded-[32px] duration-300"
            onClick={() => {
              const openModal: HTMLElement | null = document.getElementById('sign_in_modal')
              if (openModal instanceof HTMLDialogElement) {
                openModal.showModal()
              }
            }}
          >
            Login
          </button>
          <button
            className="btn bg-white border-1 border-white text-black hover:text-black hover:bg-white hover:border-white px-5 min-h-[40px] h-[40px] rounded-[32px] duration-300"
            onClick={() => {
              const openModal: HTMLElement | null = document.getElementById('sign_up_modal')
              if (openModal instanceof HTMLDialogElement) {
                openModal.showModal()
              }
            }}
          >Get Started</button>
        </div>
      </div>
    </nav>
  )
}

export default NavBarUnLogin