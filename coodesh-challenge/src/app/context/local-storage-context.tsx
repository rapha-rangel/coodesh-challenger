"use client"

import { useEffect, createContext, useState, ReactNode} from "react";
import { LocalStorageRadiosTypes, RadiosTypes } from "../types/radios";

interface LocalStorageContextType{
  items: LocalStorageRadiosTypes[];
  updateLocalStorage:(value: LocalStorageRadiosTypes[])=>void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  items:[],
  updateLocalStorage:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){
  const [items, setItems] = useState<LocalStorageRadiosTypes[]>([]);

  useEffect(() => {
    if( typeof window === "undefined") return;
    const value = window.localStorage.getItem("radio-items")
    if(value){ 
      setItems(JSON.parse(value));
    }
  }, [ ])

  const updateLocalStorage =(value:LocalStorageRadiosTypes[])=>{
    setItems(value)
    localStorage.setItem("radio-items", JSON.stringify(value))
  }

  return (
    <LocalStorageContext.Provider
      value={{
        items, 
        updateLocalStorage
      }}
    >
      {children}
    </LocalStorageContext.Provider>
  )
}