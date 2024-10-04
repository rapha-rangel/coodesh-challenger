"use client"

import { ReactNode, createContext, useState } from "react";

export const ModalSwitchContext = createContext({
  openNavbar:false,
  handleOpenNavbar: () =>{}
})

interface ProviderProps{
  children: ReactNode
}

export function ModalSwitchContextProvider({children}: ProviderProps){
  const [openNavbar, setOpenNavbar]= useState(false);

  const handleOpenNavbar =()=>{
    setOpenNavbar(prev=> !prev)
  }

  return(
    <ModalSwitchContext.Provider 
      value={{
        openNavbar, handleOpenNavbar
      }}>
      {children}
    </ModalSwitchContext.Provider>
  )
}