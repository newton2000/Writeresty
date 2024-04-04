import { FormEvent, useContext } from "react"
import { Contexts } from "../../contexts/contexts"
import { ContextsType } from "../../types/types"
import { PiAtLight, PiEnvelopeSimpleLight, PiKeyLight, PiUserLight, PiX } from "react-icons/pi"
import { GoogleLogin } from "@react-oauth/google"
//import { jwtDecode } from "jwt-decode"

const ModalSignUp = () => {
  const { setToken } = useContext(Contexts) as ContextsType
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    console.log("it's working!!")
    localStorage.setItem('token', '123')
    setToken(false)
  }

  return (
    <dialog id="sign_up_modal" className="modal">
      <div className="modal-box">
        <form method="dialog">
          {/* if there is a button in form, it will close the modal */}
          <button className="btn btn-sm btn-circle btn-ghost absolute right-3 top-3">
            <PiX size={24} />
          </button>
        </form>
        <h2 className="text-h2 text-center">Join Writeresty</h2>
        <div>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-3 mt-[40px]">
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiEnvelopeSimpleLight />
              <input type="text" className="grow" placeholder="Email" />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiUserLight />
              <input type="text" className="grow" placeholder="Fullname" />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiAtLight />
              <input type="text" className="grow" placeholder="Username" autoComplete="off" autoFocus={false} />
            </label>
            <label className="input input-bordered flex items-center w-full gap-2">
              <PiKeyLight />
              <input type="password" className="grow" placeholder="••••••••" autoComplete="off" autoFocus={false} />
            </label>
            <button className="btn bg-primary text-secondary w-full">Sign Up</button>
            <div className="flex flex-col w-full">
              <div className="divider before:h-[1px] after:h-[1px]">Or</div>
            </div>
            <GoogleLogin
              onSuccess={credentialResponse => {
                localStorage.setItem('token', String(credentialResponse.credential))
                setToken(false)
                //const decoded = jwtDecode(String(credentialResponse.credential))
                //console.table(decoded)
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
