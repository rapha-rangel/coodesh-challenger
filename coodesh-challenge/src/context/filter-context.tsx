"use client"

import { FilterSearchType } from "../types/filter-search";
import { ReactNode, createContext, useState } from "react";

export const FilterContext = createContext({
  search:"",
  type: FilterSearchType.RADIO,
  setSearch: (value: string)=> {},
  setType: (value: FilterSearchType)=> {},
})

interface ProviderProps{
  children: ReactNode
}

export function FilterContextProvider({children}: ProviderProps){
  const [search, setSearch]= useState("");
  const [type, setType]= useState(FilterSearchType.RADIO);

  return(
    <FilterContext.Provider 
      value={{
        search, 
        type,  
        setSearch, 
        setType 
      }}>
      {children}
    </FilterContext.Provider>
  )
}