import navBarIcon from '../assets/icons/navbar_icon.png';
import Image from "next/image";
import { useModalSwitch } from '../hooks/useModalSwicth';

// import Input from "./input";
// import DisplayRadios from './display-radios'


export default function NavBar() {
  const { openNavbar,handleOpenNavbar} = useModalSwitch();
  
  return (
    <section className={`fixed left-0 w-[40px] h-screen border-r-2 border-[#8d8a8a39] bg-[#2F2F33] pt-[12px] mr-4 z-10 transition-all ${openNavbar ?"w-full ": " w-[40px]"}`}>
      <header className="flex flex-col gap-[22px] w-full mb-[50px] border-[#8d8a8a39] pb-[10px] border-b-2">
        <Image src={navBarIcon} width={27} height={21} alt="navbar icon" className={`ml-[6px]`}
          onClick={()=>handleOpenNavbar()}/>
        {/* <Input/> */}
      </header>
      <p className='uppercase text-white verticalText m-auto'>Favorites</p>
      {/* <DisplayRadios/> */}
    </section>
    
  )
}