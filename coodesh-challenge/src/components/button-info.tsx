import { useState } from "react";
import Loading from "./loading";

interface ButtonInfoProps {
  name: string
  action:()=> void
  type: "button"|"submit"
  formLoading: boolean
}


export default function ButtonInfo({name, action, type, formLoading}:ButtonInfoProps){
  const [loading, setLoading] = useState(false);

  const handleAction =()=>{
    if(name ==="enter"){
      setLoading(true);
      setTimeout(()=>{
        action();
      },2000);
    }else{
      action();
    }
  }
  return(
    <button type={type} onClick={()=> handleAction()} 
      className={`border-none w-full flex justify-center items-center p-4 uppercase text-black  transition-all duration-500 hover:text-white hover:duration-250 rounded-lg 
          ${name ==="login"||name==="update" ?"bg-[#84b0f3] hover:bg-[#1267FC] focus:outline-none focus:ring focus:ring-[#84b0f3]":
          name==="enter"?"bg-[#6ee79c] hover:bg-[#10bb35] focus:outline-none focus:ring focus:ring-[#6ee79c]":"bg-[#f57575] hover:bg-[#bb1010] focus:outline-none focus:ring focus:ring-[#f57575]"}`}>
          {(type==="submit" && formLoading) || (type!=="submit" && loading)?
          <Loading
            width={"100%"}
            height={"100%"}/>
        :
          <>
            {name}
          </>
      }
    </button>
  )
}