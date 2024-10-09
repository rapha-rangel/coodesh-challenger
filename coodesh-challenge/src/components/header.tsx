import searchIcon from '../assets/icons/search_icon.png';
import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";
import InputSearch from './input-search';
import { useLocalStorage } from '@/hooks/useLocalStorage';
import { CiLogin } from "react-icons/ci";
import { useRouter } from 'next/navigation';
import Select from './select';
import { useRadioPlayer } from '@/hooks/useRadioPlayer';

export default function Header (){
	const {userRadio} = useLocalStorage();
	const router = useRouter();
	const {handleClosePlayer} = useRadioPlayer();

	const BackToLogin =()=>{
		handleClosePlayer();
		router.push("/");
	}

	return(
		<header className={`w-full flex flex-col  mb-[30px] md:flex-col-reverse md:relative md:mb-0 z-10
			${userRadio.isLogged?" md:w-3/4 md:ml-auto pl-[50px]":"md:m-auto md:w-full"}`}>
			<div className='flex justify-between items-center md:flex-col md:items-end md:gap-4 mb-[15px] md:mb-0'>
				<div className='flex md:flex-row text-white items-center gap-2 flex-row-reverse'>
					<span className='hidden md:flex '>Welcome</span> <span className='text-basicFontSize font-bold'>{userRadio.isLogged?userRadio.user:""}</span>
					{userRadio.isLogged?
						<FaUserCircle className='w-[30px] h-[30px] text-[#1267FC] md:w-[28px] md:h-[28px]'/>
					:
						<CiLogin className='w-[30px] h-[30px] text-[#1267FC] md:w-[28px] md:h-[28px] cursor-pointer'
							onClick={BackToLogin}/>
					}
				</div>
				<div className='flex items-center gap-1'>
					<div className='relative w-full'>
					<Select/>
					<InputSearch
						name={"list"}
						radiosList={[]}
						setRadiosList={()=>{}}
						/>
					</div>
					
					<Image src={searchIcon} width={25} height={25} alt="search icon" className='md:hidden'/>
				</div>
			</div>
			<h3 className='text-center text-headerFontSize font-semibold leading-headerLineHeight text-white'>Radio Browser</h3>
		</header>
	)
}

