import { RadioPlayerContext } from './../context/radio-player';
import { useContext } from "react";

export function useRadioPlayer(){
  return useContext(RadioPlayerContext)
}