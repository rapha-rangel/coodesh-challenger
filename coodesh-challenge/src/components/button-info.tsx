interface ButtonInfoProps {
  name: string
  action:()=> void
  type: "button"|"submit"
}

export default function ButtonInfo({name, action, type}:ButtonInfoProps){
  const handleAction =()=>{
    action();
  }
  return(
    <button type={type} onClick={()=> handleAction()} 
      className={`border-none w-full p-4 uppercase text-black  transition-all duration-500 hover:text-white hover:duration-250 rounded-lg
          ${name ==="login"||name==="update" ?"bg-[#84b0f3] hover:bg-[#1267FC] outline active:outline-[#84b0f3] active:outline-2":
          name==="enter"?"bg-[#6ee79c] hover:bg-[#10bb35] active:outline-[#6ee79c] outline active:outline-2":"bg-[#f57575] hover:bg-[#bb1010] active:outline-[#f57575]"}`}>
      {name}
    </button>
  )
}