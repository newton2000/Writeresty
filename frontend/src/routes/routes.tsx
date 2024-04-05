import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { HomeAuth } from "../auth/homeAuth/homeAuth"
import NotFound from "../pages/notFound/notFound"
import { useEffect, useLayoutEffect, useState } from "react"
import { Contexts } from "../contexts/contexts"
import { utilsType } from "../types/types"
import { initialAccessToken } from "../initial/initialValue"
import { jwtDecode } from "jwt-decode"

const Root = () => {
  const [utils, setUtils] = useState<utilsType>({
    theme: localStorage.getItem('theme'),
    tokenBool: !localStorage.getItem("token"),
    token: localStorage.getItem('token'),
    accessToken: initialAccessToken
  })

  const { theme, token, tokenBool } = utils

  useEffect(() => {
    try {
      setUtils({ ...utils, accessToken: jwtDecode(String(token)) })
    } catch (error) {
      console.error('Unknown token please login before: ', error)
    }
  }, [tokenBool])

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme as string)
  }, [theme])

  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_GClientID}`}>
      <Contexts.Provider value={{
        utils, setUtils
      }}>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<HomeAuth />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </Contexts.Provider >
    </GoogleOAuthProvider>
  )
}

export default Root