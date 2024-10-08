"use client"

import { createContext, useState, ReactNode} from "react";
import {  UserTypes} from "../types/radios";

interface LocalStorageContextType{
  userRadio: UserTypes;
  updateLocalStorage:(value: UserTypes)=>void;
  openEditModal: boolean
  handleOpenEditModal: (value: string)=> void
  handelChangeNickname:(value: string)=> void
  handleCloseEditModal:()=> void
  updateUserRadio:(value: UserTypes)=> void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  userRadio:{
    user:"", isLogged:false, favorites:[]
  },
  updateLocalStorage:()=>{},
  openEditModal:false,
  handleOpenEditModal:()=>{},
  handelChangeNickname:()=>{},
  handleCloseEditModal:()=>{},
  updateUserRadio:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){
 
  const [openEditModal, setOpenEditModal] = useState(false);
  const [radioId, setRadioId] = useState("")
  const [userRadio, setUserRadio] = useState<UserTypes>({
    user:"", isLogged:false, favorites:[]
  });

  const handleOpenEditModal=(value:string)=>{
    setOpenEditModal(true);
    setRadioId(value)
  }

  const handleCloseEditModal=()=>{
    setOpenEditModal(false);
  }


  const updateUserRadio =(value:UserTypes)=>{
    setUserRadio(value)
    localStorage.setItem("user-radio", JSON.stringify(value))
  }

  const updateLocalStorage =(value:UserTypes)=>{
    setUserRadio(value)
    localStorage.setItem("user-radio", JSON.stringify(value))
  }

  const handelChangeNickname =(value:string)=>{
    const newNickname =userRadio.favorites.map((item)=>{
      if(item.id===radioId) return{...item, nickname:value};
      return item
    });
    updateLocalStorage({...userRadio,favorites:newNickname});
    setOpenEditModal(false)
  }

  return (
    <LocalStorageContext.Provider
      value={{
        userRadio, 
        updateLocalStorage,
        openEditModal,
        handleOpenEditModal,
        handleCloseEditModal,
        updateUserRadio,
        handelChangeNickname
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}