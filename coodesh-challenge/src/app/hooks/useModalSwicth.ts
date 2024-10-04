import { ModalSwitchContext } from "../context/modal-swicth-context";
import { useContext } from "react";

export function useModalSwitch(){
  return useContext(ModalSwitchContext)
}