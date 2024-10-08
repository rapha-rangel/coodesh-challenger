import { FetchRadiosContext } from "../context/fetch-radios-context";
import { useContext } from "react";

export function useFecthRadios(){
  return useContext(FetchRadiosContext)
}