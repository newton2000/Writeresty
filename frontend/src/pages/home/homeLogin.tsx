import { googleLogout } from "@react-oauth/google"
import { useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import { ContextsType } from "../../types/types"
//import { jwtDecode } from "jwt-decode"

const HomeLogin = () => {
  const { setToken } = useContext(Contexts) as ContextsType
  //const decoded = jwtDecode(String(localStorage.getItem('token')))

  return (
    <div className="flex flex-col gap-3 p-3">
      <span>home - logged in</span>
     {/* <pre>{JSON.stringify(decoded, null, 2)}</pre> */}
      <button type="button" className="btn bg-red-500 text-white w-[max-content]" onClick={() => {
        googleLogout()
        localStorage.removeItem('token')
        setToken(true)
      }}>
        logout
      </button>
    </div>
  )
}

export default HomeLogin
