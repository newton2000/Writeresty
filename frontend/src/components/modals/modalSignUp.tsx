import { FormEvent, useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import { contextsType } from "../../types/types"
import { PiAtLight, PiEnvelopeSimpleLight, PiKeyLight, PiUserLight, PiX } from "react-icons/pi"
import { GoogleLogin } from "@react-oauth/google"
import CryptoJS from "crypto-js"

const ModalSignUp = () => {
  const { setUtils, utils } = useContext(Contexts) as contextsType
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("it's working!!")
    setUtils({ ...utils, token: String('credentialResponse.credential'), tokenBool: false })
    localStorage.setItem('token', '123')
  }

  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
            <PiX size={24} />
          </button>
        </form>
        <h2 className="text-h2 text-center">Join Writeresty</h2>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 mt-[40px]">
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiEnvelopeSimpleLight />
              <input type="text" id="signup-email" name="signup-email" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiUserLight />
              <input type="text" id="signup-fullname" name="signup-fullname" className="grow" placeholder="Fullname" />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiAtLight />
              <input type="text" id="signup-username" name="signup-username" className="grow" placeholder="Username" autoComplete="off" autoFocus={false} />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiKeyLight />
              <input type="password" id="signup-password" name="signup-password" className="grow" placeholder="••••••••" autoComplete="off" autoFocus={false} />
            </label>
            <button className="btn bg-primary text-secondary w-full">Sign Up</button>
            <div className="flex flex-col w-full">
              <div className="divider before:h-[1px] after:h-[1px]">Or</div>
            </div>
            <GoogleLogin
              onSuccess={credentialResponse => {
                const accessToken = CryptoJS.AES.encrypt(String(credentialResponse.credential), `${import.meta.env.VITE_APP_SECRETKEY}`)
                setUtils({ ...utils, token: String(accessToken), tokenBool: false })
                localStorage.setItem('token', String(accessToken))
              }}
              onError={() => {
                console.log('Login Failed')
              }}
            />
          </form>
        </div>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  )
}

export default ModalSignUp
