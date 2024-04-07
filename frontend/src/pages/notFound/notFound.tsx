import { Link } from "react-router-dom"

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[100vh]">
      <div className="flex flex-col gap-3 text-black justify-center border-l-[3px] border-zinc-900 pl-5 py-3 bg-gradient-to-r from-zinc-300 bg-opacity-100">
        <h1 className="text-[42px] font-bold">Oops!</h1>
        <span>Sorry, an unexpected error has occurred.</span>
        <Link to={"/"} className="font-bold hover:underline hover:underline-offset-4 w-[max-content]">Home</Link>
      </div>
    </div>
  )
}

export default NotFound