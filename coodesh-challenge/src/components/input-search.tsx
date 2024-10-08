import { useState } from "react";
import { useModalSwitch } from "../hooks/useModalSwicth"
import { LocalStorageRadiosTypes} from "../types/radios";
import { useFecthRadios } from "../hooks/useFetchRadios";
import { useFilterSearch } from "@/hooks/useFilterSearch";
interface InputProps{
  radiosList:LocalStorageRadiosTypes[]
  setRadiosList: React.Dispatch<React.SetStateAction<LocalStorageRadiosTypes[]>>
  name: string
}

export default function InputSearch ({radiosList,setRadiosList, name}:InputProps) {
  const [inputValue, setInputValue] = useState("");
  const{ openNavbar} =useModalSwitch();
  const {setSearch} = useFilterSearch();
  const {searchFechterRadios, setLoading} = useFecthRadios();

  const handleChange= (e:React.ChangeEvent<HTMLInputElement>)=>{
    setInputValue(e.target.value);
    if(name ==="favorites"){
      const filterList = radiosList && radiosList.filter(item=> item.nickname.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()));
      setRadiosList(filterList);
    } else if(e.target.value.length>= 2) {
        setLoading(true);
        searchFechterRadios(e.target.value)
        setTimeout(()=>{
          setLoading(false)
        },1000)
    } else if(e.target.value.length===0){
      searchFechterRadios("")
    }
  } 

  return (
    <label className={`transition-all duration-250 delay-0 md:opacity-100 w-min md:w-full mx-2
      ${name ==="list"? "opacity-100 md:z-10 mx-0": openNavbar? "opacity-100 transition-all duration-500 delay-200 md:mx-2":"opacity-0"}
    ${openNavbar? "opacity-100 transition-all duration-500 delay-200 ":"opacity-0"}`}>
      <input type="text" placeholder="Search here" onChange={(e)=> handleChange(e)}
        value={inputValue}
        className="placeholder-white outline-none bg-[#62626C]  px-[20px] py-[9px] text-subtitleFontSize md:w-full
          shadow-[inset_0px_4px_4px_0px_#00000040] rounded-[10px] text-subtitleLineHeight font-light text-white"/>
    </label>
  )
}