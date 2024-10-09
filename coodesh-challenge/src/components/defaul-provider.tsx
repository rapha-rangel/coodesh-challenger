"use client"

import {ReactNode} from "react";
import { ModalSwitchContextProvider } from "../context/modal-swicth-context";
import { LocalStorageContextProvider } from "../context/local-storage-context";
import { RadioPlayerContextProvider } from "../context/radio-player";
import { FetchRadiosContextProvider } from "../context/fetch-radios-context";
import { FilterContextProvider } from "@/context/filter-context";

interface DefaultProviderProps {
  children: ReactNode;
}

export  function DefaultProvider({children}: DefaultProviderProps) {


  
  return (
    <LocalStorageContextProvider>
      <FilterContextProvider>
        <FetchRadiosContextProvider>
          <ModalSwitchContextProvider>
            <RadioPlayerContextProvider>
              {children}
            </RadioPlayerContextProvider>
          </ModalSwitchContextProvider>
        </FetchRadiosContextProvider>
      </FilterContextProvider>
    </LocalStorageContextProvider>
  )
}