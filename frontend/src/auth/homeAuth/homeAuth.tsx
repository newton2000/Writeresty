import { useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import HomeLogin from "../../pages/home/homeLogin"
import HomeUnLogin from "../../pages/home/homeUnLogin"
import { ContextsType } from "../../types/types"
import { getAccessToken } from "../func/accessFunc"

export const HomeAuth = () => {
  const { token } = useContext(Contexts) as ContextsType
  return getAccessToken(token) ? <HomeLogin /> : <HomeUnLogin />
}