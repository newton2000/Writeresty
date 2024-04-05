import { useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import HomeLogin from "../../pages/home/homeLogin"
import HomeUnLogin from "../../pages/home/homeUnLogin"
import { contextsType } from "../../types/types"
import { getAccessToken } from "../func/accessFunc"

export const HomeAuth = () => {
  const { utils } = useContext(Contexts) as contextsType
  return getAccessToken(utils.tokenBool) ? <HomeLogin /> : <HomeUnLogin />
}