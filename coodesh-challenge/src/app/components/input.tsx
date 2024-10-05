import { useModalSwitch } from "../hooks/useModalSwicth"

export default function Input () {
  const{ openNavbar} =useModalSwitch()
  return (
    <label className={`transition-all duration-250 delay-0 md:opacity-100 md:w-full  ${openNavbar? "opacity-100 transition-all duration-500 delay-200 ":"opacity-0"}`}>
      <input type="text" placeholder="Search here"
        className="placeholder-white outline-none bg-[#62626C] w-[252px] px-[20px] py-[9px] text-subtitleFontSize md:w-full
          shadow-[inset_0px_4px_4px_0px_#00000040] rounded-[10px] text-subtitleLineHeight font-light text-white"/>
    </label>
  )
}