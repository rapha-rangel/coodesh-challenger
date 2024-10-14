import { useState } from "react";
import ButtonInfo from "./button-info";
import InputInfo from "./input-info";
import { useModalSwitch } from "@/hooks/useModalSwicth";

export default function EditNicknameModal(){
  const {handelChangeNickname, handleCloseEditModal, radioInfo} = useModalSwitch();
  const {openEditModal}= useModalSwitch();
  const [inputValue, setInputValue] = useState("");

  const formatPlaceHolder =()=>{
    return radioInfo.name.slice(1,radioInfo.name.length)
  }

  const handleChange =()=>{
    handelChangeNickname(inputValue)
    setInputValue("")
  }
  const handleClose =()=>{
    handleCloseEditModal()
  }

  return(
    <section className={`fixed flex flex-col left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%] bg-[#2F2F33] px-4 py-8 gap-4 justify-items-center rounded-lg w-[420px] transition-all duration-500
      ${openEditModal? "opacity-100 z-30 block": "opacity-0 z-0"}`}>
      <h4 className="uppercase text-headerFontSize leading-headerLineHeight font-semibold text-left mb-6 text-white">
        Enter a nickname:
      </h4>
      <InputInfo
        placeholder={formatPlaceHolder()}
        label={"Give a nickname"}
        type={"text"}
        inputValue={inputValue}
        setInputValue={setInputValue}/>
      <div className="flex w-full gap-4">
        <ButtonInfo
          type={"button"}
          name={"update"}
          action={handleChange}
          formLoading={false}
        />
        <ButtonInfo
          type={"button"}
          name={"cancel"}
          action={handleClose}
          formLoading={false}
        />
      </div>
      
    </section>
  )
}