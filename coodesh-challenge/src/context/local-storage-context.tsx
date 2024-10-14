"use client"

import { createContext, useState, ReactNode} from "react";
import {  UserTypes} from "../types/radios";

interface LocalStorageContextType{
  userRadio: UserTypes;
  updateLocalStorage:(value: UserTypes)=>void;
  updateUserRadio:(value: UserTypes)=> void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  userRadio:{
    user:"", isLogged:false, favorites:[]
  },
  updateLocalStorage:()=>{},
  updateUserRadio:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){
  const [userRadio, setUserRadio] = useState<UserTypes>({
    user:"", isLogged:false, favorites:[]
  });

 

  const updateUserRadio =(value:UserTypes)=>{
    setUserRadio(value)
    localStorage.setItem("user-radio", JSON.stringify(value))
  }

  const updateLocalStorage =(value:UserTypes)=>{
    setUserRadio(value)
    localStorage.setItem("user-radio", JSON.stringify(value))
  }

  return (
    <LocalStorageContext.Provider
      value={{
        userRadio, 
        updateLocalStorage,
        updateUserRadio,
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}