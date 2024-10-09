import { AiOutlineLoading3Quarters } from "react-icons/ai";

interface LoadingProp {
  width: string
  height: string
}

export default function Loading ({width, height}: LoadingProp){
  return(
    <AiOutlineLoading3Quarters className={`animate-spin w-[${width}] h-${height} text-white`}/>
  )
}