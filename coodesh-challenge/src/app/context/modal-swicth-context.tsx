"use client"

import { ReactNode, createContext, useState } from "react";

export const ModalSwitchContext = createContext({
  openNavbar:false,
  handleOpenNavbar: () =>{},
  openPlayer:false,
  handleOpenPlayer: () =>{}
})

interface ProviderProps{
  children: ReactNode
}

export function ModalSwitchContextProvider({children}: ProviderProps){
  const [openNavbar, setOpenNavbar]= useState(false);
  const [openPlayer, setOpenPlayer]= useState(false);

  const handleOpenNavbar =()=>{
    setOpenNavbar(prev=> !prev)
  }

  const handleOpenPlayer =()=>{
    setOpenPlayer(prev=> !prev)
  }

  return(
    <ModalSwitchContext.Provider 
      value={{
        openNavbar, handleOpenNavbar,
        openPlayer, handleOpenPlayer
      }}>
      {children}
    </ModalSwitchContext.Provider>
  )
}