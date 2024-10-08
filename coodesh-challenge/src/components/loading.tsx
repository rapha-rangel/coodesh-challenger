import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading (){
  return(
    <div className="h-screen flex justify-center">
      <AiOutlineLoading3Quarters className="animate-spin h-1/6 w-1/6 text-white"/>
    </div>
  )
}