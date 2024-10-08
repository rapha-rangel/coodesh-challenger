"use client"

import { FilterSearchType } from "../types/filter-search";
import { ReactNode, createContext, useState } from "react";
interface FilterContexttType{
  type: FilterSearchType;
  handleTypes:(value: FilterSearchType)=>void
}

export const FilterContext = createContext<FilterContexttType>({
  type: FilterSearchType.RADIO,
  handleTypes: ()=> {},
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