import { RadioListContext } from './../context/radios-list-context';
import { useContext } from "react";

export function useRadioList(){
  return useContext(RadioListContext)
}