import { useFilterSearch } from "@/hooks/useFilterSearch";
import { useModalSwitch } from "@/hooks/useModalSwicth";
import { FilterSearchType } from "@/types/filter-search";
import { ChangeEvent } from "react";
export default function Select (){
    const {handleTypes} = useFilterSearch();
    const {openNavbar}=useModalSwitch();
  
    const handleType = (e:ChangeEvent<HTMLSelectElement>)=>{
      handleTypes(Number(e.target.value))
    }
    
  return(
    <form className={`${openNavbar?"hidden":"block"}  max-w-sm mx-auto absolute right-1 md:-right-2 bottom-0 z-20 w-[70px]`}>
      <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 "></label>
      <select onChange={handleType} id="countries" className=" w-[50px] bg-[#62626C] shadow-[inset_0px_4px_4px_0px_#00000040] outline-none border-none text-white text-sm rounded-e-lg  block w-full p-[11.7px] cursor-pointer">
        <option value={FilterSearchType.RADIO} >RA</option>
        <option value={FilterSearchType.COUNTRY}>CO</option>
        <option value={FilterSearchType.LANGUANGE}>LA</option>
      </select>
    </form>
  )
}