import { PiFacebookLogoLight, PiInstagramLogoLight } from "react-icons/pi"

const Footer = () => {
  return (
    <footer className="flex flex-col gap-3 items-center justify-center bg-[#171717] w-full h-[150px] mt-10">
      <div className="flex items-center gap-3">
        <a href="https://instagram.com/writeresty" title="writeresty" className="hover:scale-105 duration-300">
          <PiInstagramLogoLight size={28} fill="white" />
        </a>
        <a href="https://facebook.com/writeresty" title="writeresty" className="hover:scale-105 duration-300">
          <PiFacebookLogoLight size={28} fill="white" />
        </a>
        {/* <a href="https://webring.wonderful.software#writeresty.com" title="วงแหวนเว็บ" className="hover:scale-105 duration-300">
          <img
            alt="วงแหวนเว็บ"
            width="28"
            height="28"
            className=""
            src="https://webring.wonderful.software/webring.svg"
          />
        </a> */}
      </div>
      <span className="text-white">
        © Writeresty 2024
      </span>
    </footer>
  )
}

export default Footer