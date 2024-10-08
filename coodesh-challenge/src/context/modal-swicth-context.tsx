"use client"

import { ReactNode, createContext, useState } from "react";

interface ModalSwitchContextType{
  handleOpenNavbar:()=>void,
  openNavbar:boolean,
  handleCloseNavbar:()=>void,
  openEditModal: boolean
  handleOpenEditModal: ()=> void
  openSnackbar: boolean
  handleOpenSnackbar:()=> void
}

export const ModalSwitchContext = createContext<ModalSwitchContextType>({
  openNavbar:false,
  handleOpenNavbar: () =>{},
  handleCloseNavbar: () =>{},
  openEditModal:false,
  handleOpenEditModal:()=>{},
  handleOpenSnackbar:()=>{},
  openSnackbar:false
})

interface ProviderProps{
  children: ReactNode
}

export function ModalSwitchContextProvider({children}: ProviderProps){
  const [openNavbar, setOpenNavbar]= useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);

  const handleOpenEditModal =()=>{
    setOpenEditModal(prev=>!prev);
  };
  const handleOpenNavbar =()=>{
    setOpenNavbar(prev=> !prev);
  };

  const handleCloseNavbar =()=>{
    setOpenNavbar(false);
  };

  const handleOpenSnackbar =()=>{
    setOpenSnackbar(true);
    setTimeout(()=>{
      setOpenSnackbar(false)
    },3000)
  };

  return(
    <ModalSwitchContext.Provider 
      value={{
        openNavbar, handleOpenNavbar, handleCloseNavbar, handleOpenEditModal,openEditModal, openSnackbar, handleOpenSnackbar
      }}>
      {children}
    </ModalSwitchContext.Provider>
  )
}