
import { LocalStorageContext } from "../context/local-storage-context";
import { useContext } from "react";

export function useLocalStorage(){
  return useContext(LocalStorageContext)
}