import { useModalSwitch } from '../hooks/useModalSwicth';
import { useEffect, useState } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { LocalStorageRadiosTypes } from '../types/radios';
import InputSearch from './input-search';
import DisplayFavoritesRadios from './display-favorites-radios';
import { FaStream } from "react-icons/fa";


export default function NavBar() {
  const { openNavbar,handleOpenNavbar, openEditModal} = useModalSwitch();
  const {userRadio, updateLocalStorage}= useLocalStorage();
  const [filterFavoriteRadiosList, setFilterFavoriteRadiosList]=useState<LocalStorageRadiosTypes[]>([]);

  useEffect(()=>{
    setFilterFavoriteRadiosList(userRadio.favorites);
  },[userRadio.favorites])

  const removeRadioFromFavoriteList =(id:string)=>{
    const removedRadio = userRadio.favorites.filter(item=> item.id !==id);
    updateLocalStorage({...userRadio,favorites:removedRadio})
  }
  
  return (
    <section className={`opacity-0 fixed left-0  h-screen border-r-2 border-[#8d8a8a39] bg-[#2F2F33] pt-[12px] mr-4 z-10 transition-all md:w-1/4 
      ${openEditModal?"opacity-0": "opacity-100"}
      ${openNavbar ?"w-full ": " w-[50px]"}
      `}>
      <header className="flex flex-row items-center gap-[22px] w-full border-[#8d8a8a39] pb-[10px] border-b-2 cursor-pointer">
        <FaStream className={`ml-[11px] min-w-[30px] min-h-[25px] md:hidden text-iconsColor`}
          onClick={()=>handleOpenNavbar()}/>
        <InputSearch
          name={"favorites"}
          radiosList={userRadio.favorites}
          setRadiosList={setFilterFavoriteRadiosList}
          />
      </header>
      <DisplayFavoritesRadios
        filterFavoriteRadiosList={filterFavoriteRadiosList}
        removeRadioFromFavoriteList={removeRadioFromFavoriteList}
      />
    </section>
    
  )
}