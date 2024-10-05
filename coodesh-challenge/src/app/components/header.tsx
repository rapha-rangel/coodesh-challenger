import searchIcon from '../../app/assets/icons/search_icon.png';
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

export default function Header (){
	return(
		<header className="w-full flex flex-col pl-[50px] mb-[60px] md:flex-col-reverse md:relative md:mb-0 md:w-3/4 md:ml-auto">
			<div className='flex justify-between md:flex-col md:items-end md:gap-4'>
				<div>
					<FaUserCircle className='w-[30px] h-[30px] text-[#1267FC] md:w-[28px] md:h-[28px]'/>
				</div>
				<div className='flex items-center gap-1'>
					<Image src={searchIcon} width={30} height={30} alt="search icon"/>
					<p className='text-subtitleFontSize font-light leading-subtitleLineHeight text-white hidden md:flex'>Search stations</p>
				</div>
			</div>
			<h3 className='text-center text-headerFontSize font-semibold leading-headerLineHeight text-white'>Radio Browser</h3>
		</header>
	)
}