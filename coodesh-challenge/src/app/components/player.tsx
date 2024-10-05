import { FaPen, FaTrash, FaPlay } from "react-icons/fa";
import { useModalSwitch } from "../hooks/useModalSwicth";

export default function Player (){
	const {openPlayer}= useModalSwitch();
  return(
		<section className={`fixed flex justify-between items-center px-8 py-2 bg-[#2F2F33] w-full z-20 border-t-2 border-[#8d8a8a39] transition-all duration-500
			${openPlayer? "bottom-0 transition-all duration-500":"-bottom-16 "}`}>
			<div className="flex gap-8 items-center">
				<img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFZ3EtxDcn3JjHv7b3PkRNYYKKgNBlL0bM4A&s' alt="logo"
				className={`rounded-full w-[30px] h-[30px]  transition-all duration-250`}/>
				<div className="flex flex-col">
					<p className="text-subtitleFontSize leading-subtitleLineHeight text-white whitespace-nowrap text-ellipsis overflow-hidden">FM dia</p>
					<span className="text-[8px] leading-subtitleLineHeight text-white whitespace-nowrap text-ellipsis overflow-hidden">Brasil</span>
				</div>
			</div>
			<div className="flex gap-8 items-center">
				<FaPlay className="text-white hover:text-iconsColor cursor-pointer"/>
				<FaPen className="text-white hover:text-iconsColor cursor-pointer"/>
			</div>
		</section>
	)
}