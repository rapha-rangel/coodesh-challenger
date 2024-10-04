"use client"

import {ReactNode} from "react";
import { ModalSwitchContextProvider } from "../context/modal-swicth-context";
import { LocalStorageContextProvider } from "../context/local-storage-context";

interface DefaultProviderProps {
  children: ReactNode;
}

export  function DefaultProvider({children}: DefaultProviderProps) {


  
  return (
    <LocalStorageContextProvider>
      <ModalSwitchContextProvider>
        {children}
      </ModalSwitchContextProvider>
    </LocalStorageContextProvider>
  )
}