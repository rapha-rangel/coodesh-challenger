"use client"

import { createContext, useState, ReactNode} from "react";
import { RadiosTypes} from "../types/radios";

interface RadioListContextType{
  radiosList: RadiosTypes[];
  updateRadioList:(value: RadiosTypes[])=>void
}

export const RadioListContext = createContext<RadioListContextType>({
  radiosList:[],
  updateRadioList:()=>{}
})

interface ProviderProps{
  children: ReactNode
}

export function RadioListContextProvider({children}: ProviderProps){
  const [radiosList, setRadiosList] = useState<RadiosTypes[]>([]);

  const updateRadioList =(value:RadiosTypes[])=>{
    setRadiosList(value)
  }

  return (
    <RadioListContext.Provider
      value={{
        radiosList, 
        updateRadioList
      }}
    >
      {children}
    </RadioListContext.Provider>
  )
}