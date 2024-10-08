"use client"

import { FilterSearchType } from "../types/filter-search";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  type: FilterSearchType.RADIO,
  handleTypes: (value: FilterSearchType)=> {},
})

interface ProviderProps{
  children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
  const [type, setType]= useState(FilterSearchType.RADIO);

  const handleTypes =(value: FilterSearchType)=>{
    setType(value)
  }

  return(
    <FilterContext.Provider 
      value={{
        type,  
        handleTypes 
      }}>
      {children}
    </FilterContext.Provider>
  )
}