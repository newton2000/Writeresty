import { useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import { ContextsType } from "../../types/types"

const Themes = () => {
  const { setTheme } = useContext(Contexts) as ContextsType
  const switchThemes = (themeName: string) => {
    setTheme(themeName)
    localStorage.setItem('theme', themeName)
  }

  return (
    <div className="flex items-center gap-3">
      <button
        className="btn bg-black border-none text-white"
        onClick={() => switchThemes('')}>
        System
      </button>
      <button
        className="btn bg-[white] text-black"
        onClick={() => switchThemes('light')}>
        Light
      </button>
      <button
        className="btn bg-[black] text-white"
        onClick={() => switchThemes('dark')}>
        Dark
      </button>
    </div>
  )
}

export default Themes