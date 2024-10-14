"use client"

import { useLocalStorage } from "@/hooks/useLocalStorage";
import { ReactNode, createContext, useState } from "react";

interface ModalSwitchContextType{
  handleOpenNavbar:()=>void,
  openNavbar:boolean,
  handleCloseNavbar:()=>void,
  openEditModal: boolean
  handleOpenEditModal: (value:{id:string, name:string})=> void
  openSnackbar: boolean
  handleOpenSnackbar:()=> void
  handelChangeNickname:(value: string) =>void
  handleCloseEditModal:()=>void
  radioInfo:{
    id:string, name:string
  }
}

export const ModalSwitchContext = createContext<ModalSwitchContextType>({
  openNavbar:false,
  handleOpenNavbar: () =>{},
  handleCloseNavbar: () =>{},
  openEditModal:false,
  handleOpenEditModal:()=>{},
  handleOpenSnackbar:()=>{},
  openSnackbar:false,
  handelChangeNickname:()=>{},
  handleCloseEditModal:()=>{},
  radioInfo:{
    id:"", name:""
  }
})

interface ProviderProps{
  children: ReactNode
}

export function ModalSwitchContextProvider({children}: ProviderProps){
  const [openNavbar, setOpenNavbar]= useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [radioInfo, setRadioInfo] = useState({
    id:"", name:""
  });
  const {userRadio,updateLocalStorage} = useLocalStorage();

  const handleOpenEditModal=(value:{id:string, name:string})=>{
    setOpenEditModal(true);
    setRadioInfo({id:value.id,name:value.name})
  }

  const handleCloseEditModal=()=>{
    setOpenEditModal(false);
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

  const handelChangeNickname =(value:string)=>{
    const newNickname =userRadio.favorites.map((item)=>{
      if(item.id===radioInfo.id) return{...item, nickname:value};
      return item
    });
    updateLocalStorage({...userRadio,favorites:newNickname});
    setOpenEditModal(false)
  }

  return(
    <ModalSwitchContext.Provider 
      value={{
        openNavbar, handleOpenNavbar, handleCloseNavbar, handleOpenEditModal,
        openEditModal, openSnackbar, handleOpenSnackbar,handelChangeNickname,
        handleCloseEditModal,radioInfo
      }}>
      {children}
    </ModalSwitchContext.Provider>
  )
}