import navBarIcon from '../assets/icons/navbar_icon.png';
import Image from "next/image";
import { useModalSwitch } from '../hooks/useModalSwicth';

import Input from "./input";
import DisplayRadios from './display-radios'


export default function NavBar() {
  const { openNavbar,handleOpenNavbar} = useModalSwitch();
  
  return (
    <section className={`fixed left-0  h-screen border-r-2 border-[#8d8a8a39] bg-[#2F2F33] pt-[12px] mr-4 z-10 transition-all md:w-1/4 ${openNavbar ?"w-full ": " w-[50px]"}`}>
      <header className="flex flex-row items-center gap-[22px] w-full border-[#8d8a8a39] pb-[10px] border-b-2 cursor-pointer">
        <Image src={navBarIcon} width={27} height={21} alt="navbar icon" className={`ml-[11px] min-w-[27px] min-h-[21px] md:hidden`}
          onClick={()=>handleOpenNavbar()}/>
        <Input/>
      </header>
      <DisplayRadios/>
    </section>
    
  )
}