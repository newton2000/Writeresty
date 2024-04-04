import { BrowserRouter, Routes, Route } from "react-router-dom"
import { GoogleOAuthProvider } from '@react-oauth/google'
import { HomeAuth } from "../auth/homeAuth/homeAuth"
import NotFound from "../pages/notFound/notFound"
import { useLayoutEffect, useState } from "react"
import { Contexts } from "../contexts/contexts"


const Root = () => {
  const [theme, setTheme] = useState<string | null>(localStorage.getItem('theme'))
  const [token, setToken] = useState<boolean>(!localStorage.getItem("token"))

  useLayoutEffect(() => {
    document.documentElement.setAttribute('data-theme', theme as string)
  }, [theme])

  return (
    <GoogleOAuthProvider clientId={`${import.meta.env.VITE_APP_GClientID}`}>
      <Contexts.Provider value={{
        theme, setTheme, token, setToken
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