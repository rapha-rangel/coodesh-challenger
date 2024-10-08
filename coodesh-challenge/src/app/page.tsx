"use client"

import ButtonInfo from "@/components/button-info";
import InputInfo from "@/components/input-info";
import Snackbar from "@/components/snackbar";
import { useModalSwitch } from "@/hooks/useModalSwicth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const router = useRouter();
  const {handleOpenSnackbar} = useModalSwitch()

  const handlePage=(e: { preventDefault: () => void} )=>{
    e.preventDefault();
    if(inputEmail ==="rcr@gmail.com" && inputPassword==="123456"){
      router.push(`/radioMain?user=rcr`) 
    } else{
    handleOpenSnackbar();
    }
  }

  const handleEnterWithoutLogin =()=>{
    router.push(`/radioMain`) 
  }

  return (
    <section className="bg-[#2F2F33] w-full h-screen">
      <form onSubmit={handlePage} className=" absolute left-[50%] top-[50%] -translate-y-[50%] -translate-x-[50%]">
        <h3 className="text-white font-bold text-3xl mb-6">Radio Browser</h3> 
        <div className="flex flex-col gap-6 mb-10">
          <InputInfo
            label={"email"}
            placeholder={"email"}
            type={"email"}
            inputValue={inputEmail}
            setInputValue={setInputEmail}
          />
          <InputInfo
            placeholder={"123..."}
            type={"password"}
            label={"password"}
            inputValue={inputPassword}
            setInputValue={setInputPassword}
          />
        </div>
        <div className="flex gap-4">
          <ButtonInfo
            type={"submit"}
            name={"login"}
            action={()=>{}}
          />
          <ButtonInfo
            type={"button"}
            name={"enter"}
            action={handleEnterWithoutLogin}
          />
        </div>
      </form>
    <Snackbar title={"Erro"} content={"Email or password are wrong"}/>
    </section>
  );
}
