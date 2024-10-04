"use client"

import { useEffect, createContext, useState, ReactNode} from "react";
import { RadiosTypes } from "../types/radios";

interface LocalStorageContextType{
  items: RadiosTypes[];
  updateLocalStorage:(value: RadiosTypes[])=>void
}

export const LocalStorageContext = createContext<LocalStorageContextType>({
  items:[],
  updateLocalStorage:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function LocalStorageContextProvider({children}: ProviderProps){
  const [items, setItems] = useState<RadiosTypes[]>([]);

  useEffect(() => {
    if( typeof window === "undefined") return;
    const value = window.localStorage.getItem("cart-items")
    if(value){ 
      setItems(JSON.parse(value));
    }
  }, [ ])

  const updateLocalStorage =(value:RadiosTypes[])=>{
    setItems(value)
    localStorage.setItem("cart-items", JSON.stringify(value))
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